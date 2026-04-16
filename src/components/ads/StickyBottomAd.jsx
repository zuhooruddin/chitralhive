import { Box, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import AdSenseAd from "./AdSenseAd";

const StickyBottomAd = ({
  slot,
  format = "fluid",
  layoutKey,
  layout,
  fullWidthResponsive = true,
  minHeight = 90,
}) => {
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const enabled = Boolean(client && slot);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          minHeight,
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
          <AdSenseAd
            slot={slot}
            format={format}
            layoutKey={layoutKey}
            layout={layout}
            fullWidthResponsive={fullWidthResponsive}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default StickyBottomAd;
