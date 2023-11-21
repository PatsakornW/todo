import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

const Add_Form = ({ add_todo, newtodo, setnewtodo, editid }) => {
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
  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={add_todo}>
        <Box display="flex">
          <TextField
            type="text"
            placeholder="Add a new todo"
            value={newtodo}
            onChange={(e) => setnewtodo(e.target.value)}
            variant="outlined"
            fullWidth
            color="warning"
            sx={{ borderRadius: "4px 0 0 4px" }}
          />
          <Button
            type="submit"
            variant="contained"
            color={editid ? "success" : "warning"}
            sx={{ borderRadius: "0 4px 4px 0" }}
          >
            {editid ? "Update" : "Add"}
          </Button>
        </Box>
      </form>
    </ThemeProvider>
  );
};

export default Add_Form;
