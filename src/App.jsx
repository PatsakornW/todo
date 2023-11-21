import { useState } from "react";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    warning: {
      light: "#ef981e",
      main: "#ef980e",
      dark: "#ef800e",
      contrastText: "#fff",
    },
  },

  typography: {
    fontFamily: ["Poppins"],
  },
});

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card sx={{maxWidth: 345, borderRadius: "10px" }}>
          <CardContent>
            <Typography
              sx={{ textAlign: "center",fontWeight:'bold' }}
              gutterBottom
              variant="h5"
              component="div"

            >
              {toggle ? "Login" : "Register"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {toggle ? (
                <Login setToggle={setToggle} />
              ) : (
                <Register setToggle={setToggle} />
              )}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default App;
