import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AdBanner = dynamic(() => import("@/components/AdBanner"), {
  ssr: false,
  loading: () => <div style={{ minHeight: 90 }} />,
});

const StickyBottomAd = ({
  slot,
  format = "fluid",
  layoutKey,
  layout,
  fullWidthResponsive = true,
  minHeight = 90,
  onVisibilityChange,
}) => {
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [adVisible, setAdVisible] = useState(true);
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const enabled = Boolean(client && slot);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof onVisibilityChange === "function") {
      onVisibilityChange(mounted && enabled && !dismissed && adVisible);
    }
  }, [adVisible, dismissed, enabled, mounted, onVisibilityChange]);

  if (!enabled || !mounted || dismissed) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1400,
        px: { xs: 1, sm: 2 },
        pb: { xs: 1, sm: 2 },
        pointerEvents: "none",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          mx: "auto",
          maxWidth: 900,
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
          pointerEvents: "auto",
          ...(adVisible ? { minHeight } : {}),
        }}
      >
        <IconButton
          size="small"
          onClick={() => setDismissed(true)}
          aria-label="Close ad"
          sx={{
            position: "absolute",
            top: 6,
            right: 6,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            zIndex: 1,
            "&:hover": { bgcolor: "grey.100" },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <Box sx={{ p: 1.5, pt: 3.5 }}>
          <AdBanner
            slot={slot}
            format={format}
            layoutKey={layoutKey}
            layout={layout}
            fullWidthResponsive={fullWidthResponsive}
            reserveSpace={false}
            onNoFill={() => {
              setAdVisible(false);
              setDismissed(true);
            }}
            onVisibilityChange={setAdVisible}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default StickyBottomAd;
