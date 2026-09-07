import { Box } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#64698d",
      }}
    >
      {children}
    </Box>
  );
}
