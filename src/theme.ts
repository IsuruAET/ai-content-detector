import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2196F3",
      light: "#64B5F6",
      dark: "#1976D2",
    },
    secondary: {
      main: "#21CBF3",
      light: "#6EE7FF",
      dark: "#1CB5E0",
    },
    background: {
      default: "#f5f7fa",
      paper: "rgba(255, 255, 255, 0.9)",
    },
  },
  typography: {
    fontFamily: "Geist, system-ui, -apple-system, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      "@media (min-width:600px)": {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2.8rem",
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.1rem",
      "@media (min-width:600px)": {
        fontSize: "1.25rem",
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          padding: "12px 24px",
          borderRadius: "12px",
          background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
          "&:hover": {
            background: "linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 10,
          borderRadius: 5,
          backgroundColor: "rgba(33, 150, 243, 0.1)",
        },
        bar: {
          borderRadius: 5,
          background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
        },
      },
    },
  },
});
