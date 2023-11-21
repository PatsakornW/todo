import { useState } from "react";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography
            sx={{ textAlign: "center" }}
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
  );
};

export default App;
