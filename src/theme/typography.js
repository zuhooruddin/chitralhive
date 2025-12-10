export const fontSize = 14;
export const fontFamily = [
  "Open Sans",
  "Roboto",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  "sans-serif",
].join(",");
export const typography = {
  fontSize,
  fontFamily,
  htmlFontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: "2.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
  },
  h2: {
    fontSize: "2rem",
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
  },
  h3: {
    fontSize: "1.75rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  body1: {
    fontSize,
    lineHeight: 1.6,
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.6,
  },
  button: {
    fontWeight: 600,
    textTransform: "none",
    letterSpacing: "0.02em",
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.5,
  },
};
