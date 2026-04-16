import { Box } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";

const MAX_REQUEST_RETRIES = 40;
const REQUEST_RETRY_MS = 250;

const isPendingAdSlot = (element) => {
  if (!element) return false;
  if (!element.isConnected) return false;
  if (element.hasAttribute("data-adsbygoogle-status")) return false;
  if (element.dataset.adsbygoogleRequested === "true") return false;
  return element.childElementCount === 0 && element.innerHTML.trim() === "";
};

const getNextPendingAdSlot = () =>
  document.querySelector('ins.adsbygoogle:not([data-adsbygoogle-status]):not([data-adsbygoogle-requested="true"])');

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
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!slot) return;
    const ins = insRef.current;
    if (!ins) return;

    let cancelled = false;
    let retryTimeoutId;
    let retryCount = 0;

    const requestAd = () => {
      if (cancelled) return;
      if (!isPendingAdSlot(ins)) return;

      const nextPending = getNextPendingAdSlot();
      if (nextPending !== ins) {
        if (retryCount >= MAX_REQUEST_RETRIES) return;
        retryCount += 1;
        retryTimeoutId = window.setTimeout(requestAd, REQUEST_RETRY_MS);
        return;
      }

      ins.dataset.adsbygoogleRequested = "true";
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } catch {
        delete ins.dataset.adsbygoogleRequested;

        if (retryCount < MAX_REQUEST_RETRIES) {
          retryCount += 1;
          retryTimeoutId = window.setTimeout(requestAd, REQUEST_RETRY_MS);
          return;
        }

        // Script blocked or never became ready.
        if (hideIfNoFill) {
          setVisible(false);
          if (typeof onNoFill === "function") onNoFill();
        }
      }
    };

    requestAd();

    return () => {
      cancelled = true;
      if (retryTimeoutId) window.clearTimeout(retryTimeoutId);
    };
  }, [hideIfNoFill, onNoFill, slot]);

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

      if (h <= 1 && !hasChildNodes) {
        setVisible(false);
        if (typeof onNoFill === "function") onNoFill();
      }
    }, noFillCheckMs);

    return () => window.clearTimeout(t);
  }, [enabled, hideIfNoFill, noFillCheckMs, slot, format, layout, activeLayoutKey]);

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
