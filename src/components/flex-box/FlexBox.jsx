import { Box } from "@mui/material";

// Prevent custom styling props from leaking to the DOM.
const FlexBox = ({ children, isDark, isSelected, ...props }) => (
  <Box display="flex" {...props}>
    {children}
  </Box>
);

export default FlexBox;
