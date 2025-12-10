import { blue, dark, grey } from "./themeColors";
import { fontFamily, fontSize } from "./typography"; // ========================================================

// =========================================================
export const components = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        scrollBehavior: "smooth",
      },
      p: {
        lineHeight: 1.75,
      },
      button: {
        fontFamily,
        fontSize,
      },
      ".MuiRating-sizeSmall": {
        fontSize: "20px",
      },
      a: {
        textDecoration: "none",
        color: "inherit",
      },
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none",
      },
      "#nprogress .bar": {
        top: 0,
        left: 0,
        position: "fixed",
        overflow: "hidden",
        height: "3px !important",
        backgroundColor: "#D23F57",
        zIndex: "99999999 !important",
        borderRadius: "0px 300px 300px 0px !important",
        boxShadow: "0 0 10px rgba(210, 63, 87, 0.5)",
      },
      "#nprogress .peg": {
        boxShadow: "0 0 10px rgba(210, 63, 87, 0.5), 0 0 5px rgba(210, 63, 87, 0.5)",
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        zIndex: 0,
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 16,
        boxShadow: "0px 16px 48px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "12px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
        },
      },
    },
  },
  MuiPagination: {
    defaultProps: {
      variant: "outlined",
      color: "primary",
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        paddingTop: 8,
        paddingBottom: 8,
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        "& .secondary": {
          opacity: 0.4,
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      size: "small",
      variant: "outlined",
    },
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...(ownerState.color === "info" && {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            fontWeight: 600,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: grey[300],
          },
        }),
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        minWidth: 0,
        minHeight: 0,
        fontWeight: 600,
        textTransform: "none",
        letterSpacing: "0.02em",
        borderRadius: "8px",
        padding: "10px 24px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
        },
        ...(ownerState.color === "info" && {
          borderRadius: "8px",
        }),
        ...(ownerState.color === "dark" && {
          color: "#fff",
          borderRadius: "8px",
          transition: "all 0.3s",
          ":hover": {
            backgroundColor: "#343434",
            transform: "translateY(-2px)",
          },
        }),
        ...(ownerState.color === "dark" &&
          ownerState.variant === "outlined" && {
            color: dark.main,
            borderRadius: "8px",
            transition: "all 0.3s",
            ":hover": {
              backgroundColor: dark.main,
              color: "white",
              transform: "translateY(-2px)",
            },
          }),
      }),
      sizeLarge: {
        padding: "14px 32px",
        fontSize: "1rem",
      },
      sizeMedium: {
        padding: "10px 24px",
        fontSize: "0.875rem",
      },
      sizeSmall: {
        padding: "8px 16px",
        fontSize: "0.75rem",
      },
    },
    defaultProps: {
      color: "inherit",
    },
  },
};
