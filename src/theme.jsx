import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "rgb(0, 128, 85)",
      main: "rgb(0, 128, 85)",
      dark: "rgb(0, 128, 85)",
      contrastText: "#fff",
    },
    secondary: {
      light: "#0a0a0a",
      main: "#0a0a0a",
      dark: "#fff",
      contrastText: "#fff",
    },
    ternary: {
      light: "#6642B1",
      main: "#6642B1",
      dark: "#6642B1",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif", "Playfair Display"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "unset",
          borderRadius: "12px",
          fontWeight: "800",
        },
      },
      variants: [
        {
          props: { variant: "green" },
          style: {
            backgroundColor: "rgb(0, 128, 85)",
            padding: "12px 20px",
            marginLeft: "15px",
          },
        },
        {
          props: { variant: "purple" },
          style: {
            backgroundColor: "#6642B1",
            padding: "12px 20px",
            marginTop: "30px",
          },
        },
        {
          props: { variant: "black" },
          style: {
            backgroundColor: "#0a0a0a",
            marginTop: "30px",
          },
        },
      ],
    },
  },
});

theme.typography.h1 = {
  fontSize: "2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};
theme.typography.h2 = {
  fontSize: "1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.25rem",
  },
};
theme.typography.h3 = {
  fontSize: "1rem",
  fontWeight: "600",
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};
theme.typography.italic = {
  fontFamily: "Playfair Display",
};
theme.typography.smallText = {
  fontSize: ".75rem",
};

export default theme;
