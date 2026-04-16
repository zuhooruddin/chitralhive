import { Box } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";

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

    // Prevent "All 'ins' elements ... already have ads" by not re-pushing
    // for an <ins> that AdSense already filled or already requested.
    //
    // Note: In Next/React, multiple ad units can mount close together and race
    // before AdSense sets `data-adsbygoogle-status="done"`. We mark the element
    // as requested to avoid a second push targeting an already-queued slot.
    if (ins.getAttribute("data-adsbygoogle-status") === "done") return;
    if (ins.dataset.adsbygoogleRequested === "true") return;

    // Only push if there's at least one unfilled slot on the page.
    // This avoids pushing when everything is already filled (TagError).
    const hasUnfilled = Boolean(
      document.querySelector('ins.adsbygoogle:not([data-adsbygoogle-status="done"]):not([data-adsbygoogle-requested="true"])')
    );
    if (!hasUnfilled) return;

    ins.dataset.adsbygoogleRequested = "true";
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      delete ins.dataset.adsbygoogleRequested;
      // Ad blockers / script not loaded yet
      if (hideIfNoFill) {
        setVisible(false);
        if (typeof onNoFill === "function") onNoFill();
      }
    }
  }, [slot]);

  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const defaultLayoutKey = process.env.NEXT_PUBLIC_ADSENSE_FLUID_LAYOUT_KEY;
  
  // Use provided layoutKey or fallback to environment default
  const activeLayoutKey = layoutKey || (format === "fluid" ? defaultLayoutKey : undefined);

  const enabled = useMemo(() => Boolean(client && slot), [client, slot]);

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
