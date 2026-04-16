import { Box } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";

const MAX_REQUEST_RETRIES = 40;
const REQUEST_RETRY_MS = 250;
const REQUEST_SETTLE_MS = 1500;
let adRequestOwnerId = 0;

const getRequestedSlotSet = () => {
  if (typeof window === "undefined") return null;
  if (!window.__adsenseRequestedSlots) {
    // WeakSet so detached DOM nodes can be garbage collected
    window.__adsenseRequestedSlots = new WeakSet();
  }
  return window.__adsenseRequestedSlots;
};

const isUnfilledAd = (ins) => {
  if (!ins) return false;

  // AdSense commonly sets this when there is no fill.
  // In this state the slot may still have a non-zero height, which would
  // otherwise leave a visible empty gap in the layout.
  const adStatus = ins.getAttribute("data-ad-status");
  if (adStatus && adStatus.toLowerCase() === "unfilled") return true;

  const adsByGoogleStatus = ins.getAttribute("data-adsbygoogle-status");
  // Some implementations end up with status="done" but no iframe rendered.
  if (adsByGoogleStatus && adsByGoogleStatus.toLowerCase() === "done") {
    const hasIframe = Boolean(ins.querySelector("iframe"));
    const hasAnyContent = ins.childElementCount > 0 || ins.innerHTML.trim() !== "";
    if (!hasIframe && !hasAnyContent) return true;
  }

  return false;
};

const isPendingAdSlot = (element) => {
  if (!element) return false;
  if (!element.isConnected) return false;
  if (element.hasAttribute("data-adsbygoogle-status")) return false;
  if (element.dataset.adsbygoogleRequested === "true") return false;
  if (element.getAttribute("data-ad-status")) return false;
  if (element.querySelector && element.querySelector("iframe")) return false;
  return element.childElementCount === 0 && element.innerHTML.trim() === "";
};

const getNextPendingAdSlot = () => {
  const candidates = document.querySelectorAll(
    'ins.adsbygoogle:not([data-adsbygoogle-status]):not([data-adsbygoogle-requested="true"])'
  );

  for (const el of candidates) {
    if (isPendingAdSlot(el)) return el;
  }

  return null;
};

const getAdsPushLock = () =>
  typeof window !== "undefined" ? window.__adsensePushInFlight === true : false;

const setAdsPushLock = (locked) => {
  if (typeof window !== "undefined") {
    window.__adsensePushInFlight = locked;
  }
};

const getNextOwnerId = () => {
  adRequestOwnerId += 1;
  return `adsense-slot-${adRequestOwnerId}`;
};

const isAdSenseScriptReady = () => {
  if (typeof window === "undefined") return false;
  if (window.__adsenseScriptLoaded === true) return true;
  // If the app didn't set readiness helpers (e.g. script added elsewhere),
  // fall back to checking if a loaded script exists.
  const s = document.querySelector('script[src*="pagead/js/adsbygoogle.js"]');
  if (!s) return false;
  const loadedAttr = s.getAttribute("data-adsense-loaded");
  if (loadedAttr === "true") return true;
  return false;
};

/**
 * Reusable Google AdSense unit.
 *
 * Usage requires:
 * - NEXT_PUBLIC_ADSENSE_CLIENT="ca-pub-xxxxxxxxxxxxxxxx"
 * - a valid ad `slot` for the placement
 */
const AdSenseAd = ({
  slot,
  format = "auto",
  fullWidthResponsive = true,
  layout,
  layoutKey,
  style,
  insStyle,
  sx,
  hideIfNoFill = true,
  noFillCheckMs = 2500,
  onNoFill,
  onVisibilityChange,
  // Reserve space to prevent CLS when ads load / no-fill happens.
  // Default to false so missing/blocked ads don't leave empty sections.
  reserveSpace = false,
  // Typical responsive ad heights (tweak per placement if needed)
  minHeight = { xs: 100, sm: 120, md: 250 },
}) => {
  const insRef = useRef(null);
  const ownerIdRef = useRef(getNextOwnerId());
  const hasPushedRef = useRef(false);
  const [visible, setVisible] = useState(true);
  const onNoFillRef = useRef(onNoFill);

  useEffect(() => {
    onNoFillRef.current = onNoFill;
  }, [onNoFill]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!slot) return;
    const ins = insRef.current;
    if (!ins) return;
    if (hasPushedRef.current) return;

    let cancelled = false;
    let retryTimeoutId;
    let settleTimeoutId;
    let retryCount = 0;

    const requestAd = () => {
      if (cancelled) return;
      if (hasPushedRef.current) return;
      if (!isPendingAdSlot(ins)) return;
      if (!isAdSenseScriptReady()) {
        if (retryCount >= MAX_REQUEST_RETRIES) return;
        retryCount += 1;
        retryTimeoutId = window.setTimeout(requestAd, REQUEST_RETRY_MS);
        return;
      }
      if (getAdsPushLock()) {
        if (retryCount >= MAX_REQUEST_RETRIES) return;
        retryCount += 1;
        retryTimeoutId = window.setTimeout(requestAd, REQUEST_RETRY_MS);
        return;
      }

      // Guard: never push unless there is at least one truly pending slot.
      // Prevents TagError: "All 'ins' elements ... already have ads in them."
      if (!getNextPendingAdSlot()) return;

      const nextPending = getNextPendingAdSlot();
      if (nextPending !== ins) {
        if (retryCount >= MAX_REQUEST_RETRIES) return;
        retryCount += 1;
        retryTimeoutId = window.setTimeout(requestAd, REQUEST_RETRY_MS);
        return;
      }

      // The slot might get unmounted between the checks above and the push call
      // (e.g. on route change). Avoid pushing in that case.
      if (!ins.isConnected) return;

      ins.dataset.adsbygoogleRequested = "true";
      const requestedSet = getRequestedSlotSet();
      if (requestedSet && requestedSet.has(ins)) {
        hasPushedRef.current = true;
        return;
      }
      window.__adsensePushOwner = ownerIdRef.current;
      setAdsPushLock(true);
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        hasPushedRef.current = true;
        if (requestedSet) requestedSet.add(ins);
      } catch (error) {
        if (window.__adsensePushOwner === ownerIdRef.current) {
          window.__adsensePushOwner = undefined;
          setAdsPushLock(false);
        }
        delete ins.dataset.adsbygoogleRequested;

        const message = String(error?.message || error || "");
        if (message.includes("already have ads in them")) {
          // Slot got filled (or AdSense thinks it did). Don't try to push again.
          hasPushedRef.current = true;
          if (requestedSet) requestedSet.add(ins);
          return;
        }

        if (retryCount < MAX_REQUEST_RETRIES) {
          retryCount += 1;
          retryTimeoutId = window.setTimeout(requestAd, REQUEST_RETRY_MS);
          return;
        }

        // Script blocked or never became ready.
        if (hideIfNoFill) {
          setVisible(false);
          if (typeof onNoFillRef.current === "function") onNoFillRef.current();
        }
        return;
      }

      settleTimeoutId = window.setTimeout(() => {
        if (window.__adsensePushOwner === ownerIdRef.current) {
          window.__adsensePushOwner = undefined;
          setAdsPushLock(false);
        }
        if (!cancelled && isPendingAdSlot(ins) && retryCount < MAX_REQUEST_RETRIES) {
          retryCount += 1;
          requestAd();
        }
      }, REQUEST_SETTLE_MS);
    };

    requestAd();

    return () => {
      cancelled = true;
      if (retryTimeoutId) window.clearTimeout(retryTimeoutId);
      if (settleTimeoutId) window.clearTimeout(settleTimeoutId);
      if (window.__adsensePushOwner === ownerIdRef.current) {
        window.__adsensePushOwner = undefined;
        setAdsPushLock(false);
      }
    };
  }, [hideIfNoFill, slot]);

  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const defaultLayoutKey = process.env.NEXT_PUBLIC_ADSENSE_FLUID_LAYOUT_KEY;
  
  // Use provided layoutKey or fallback to environment default
  const activeLayoutKey = layoutKey || (format === "fluid" ? defaultLayoutKey : undefined);

  const enabled = useMemo(() => Boolean(client && slot), [client, slot]);

  useEffect(() => {
    if (typeof onVisibilityChange === "function") {
      onVisibilityChange(visible);
    }
  }, [onVisibilityChange, visible]);

  useEffect(() => {
    if (!enabled) return;
    if (!hideIfNoFill) return;
    if (typeof window === "undefined") return;

    setVisible(true);

    const t = window.setTimeout(() => {
      const el = insRef.current;
      if (!el) return;

      const h = el.offsetHeight || 0;
      const hasChildNodes = el.childNodes && el.childNodes.length > 0;

      if (isUnfilledAd(el) || (h <= 1 && !hasChildNodes)) {
        setVisible(false);
        if (typeof onNoFill === "function") onNoFill();
      }
    }, noFillCheckMs);

    return () => window.clearTimeout(t);
  }, [enabled, hideIfNoFill, noFillCheckMs, slot, format, layout, activeLayoutKey]);

  useEffect(() => {
    if (!enabled) return;
    if (!hideIfNoFill) return;
    if (typeof window === "undefined") return;

    const el = insRef.current;
    if (!el) return;

    if (isUnfilledAd(el)) {
      setVisible(false);
      if (typeof onNoFill === "function") onNoFill();
      return;
    }

    let rafId = 0;
    const observer = new MutationObserver(() => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        const current = insRef.current;
        if (!current) return;
        if (isUnfilledAd(current)) {
          setVisible(false);
          if (typeof onNoFill === "function") onNoFill();
        }
      });
    });

    observer.observe(el, {
      attributes: true,
      attributeFilter: ["data-ad-status", "data-adsbygoogle-status", "style"],
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [enabled, hideIfNoFill, onNoFill]);

  if (!enabled) return null;

  if (!visible) {
    if (!reserveSpace) return null;
    return (
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          minHeight,
          ...sx,
        }}
        style={style}
        aria-hidden="true"
      />
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        ...(reserveSpace ? { minHeight } : {}),
        ...sx,
      }}
      style={style}
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block", ...(insStyle || {}) }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
        {...(layout ? { "data-ad-layout": layout } : {})}
        {...(activeLayoutKey ? { "data-ad-layout-key": activeLayoutKey } : {})}
      />
    </Box>
  );
};

export default AdSenseAd;
