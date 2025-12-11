import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import useSettings from "hooks/useSettings";

const ThemeSwitcher = ({ iconOnly = false }) => {
  const { settings, toggleTheme } = useSettings();
  const isDark = settings.theme === "dark";

  if (iconOnly) {
    return (
      <Tooltip title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"} arrow>
        <IconButton
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          sx={{
            color: isDark ? "#FFD700" : "#1a202c",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: "scale(1.1) rotate(20deg)",
              backgroundColor: isDark ? "rgba(255, 215, 0, 0.1)" : "rgba(210, 63, 87, 0.1)",
            },
          }}
        >
          {isDark ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <Box
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      }}
      sx={{
        position: "relative",
        width: 70,
        height: 36,
        borderRadius: "18px",
        background: isDark 
          ? "linear-gradient(135deg, #1a202c 0%, #2d3748 100%)" 
          : "linear-gradient(135deg, #FDB813 0%, #FFD93D 100%)",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: isDark 
          ? "inset 0 2px 8px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)" 
          : "inset 0 2px 8px rgba(253, 184, 19, 0.3), 0 4px 12px rgba(255, 217, 61, 0.4)",
        border: isDark ? "2px solid #4a5568" : "2px solid #FDB813",
        display: "flex",
        alignItems: "center",
        padding: "3px",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: isDark 
            ? "inset 0 2px 8px rgba(0, 0, 0, 0.5), 0 6px 20px rgba(0, 0, 0, 0.4)" 
            : "inset 0 2px 8px rgba(253, 184, 19, 0.4), 0 6px 20px rgba(255, 217, 61, 0.5)",
        },
        "&:focus-visible": {
          outline: "2px solid #D23F57",
          outlineOffset: "3px",
        },
      }}
    >
      {/* Toggle Circle */}
      <Box
        sx={{
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: isDark 
            ? "linear-gradient(135deg, #F7F7F7 0%, #E0E0E0 100%)" 
            : "linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)",
          position: "absolute",
          left: isDark ? "calc(100% - 30px)" : "4px",
          top: "3px",
          transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          boxShadow: isDark 
            ? "0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -1px 2px rgba(0, 0, 0, 0.1)" 
            : "0 2px 8px rgba(253, 184, 19, 0.4), inset 0 -1px 2px rgba(253, 184, 19, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isDark ? (
          <DarkMode sx={{ fontSize: 16, color: "#1a202c" }} />
        ) : (
          <LightMode sx={{ fontSize: 16, color: "#FDB813" }} />
        )}
      </Box>

      {/* Decorative Stars for Dark Mode */}
      {isDark && (
        <>
          <Box
            sx={{
              position: "absolute",
              left: "8px",
              top: "8px",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "white",
              boxShadow: "0 0 4px white",
              animation: "twinkle 2s infinite",
              "@keyframes twinkle": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: 0.3 },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              left: "14px",
              top: "14px",
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "white",
              boxShadow: "0 0 3px white",
              animation: "twinkle 3s infinite",
              animationDelay: "1s",
            }}
          />
        </>
      )}

      {/* Decorative Clouds for Light Mode */}
      {!isDark && (
        <Box
          sx={{
            position: "absolute",
            right: "8px",
            top: "10px",
            width: "8px",
            height: "3px",
            borderRadius: "2px",
            background: "rgba(255, 255, 255, 0.6)",
            boxShadow: "4px 0 0 rgba(255, 255, 255, 0.4)",
          }}
        />
      )}
    </Box>
  );
};

export default ThemeSwitcher;

