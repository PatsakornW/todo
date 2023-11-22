import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

const Add_Form = ({ add_todo, newtodo, setnewtodo, editid,titleError,setTitleError }) => {
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
      <Box component={"form"} onSubmit={add_todo}>
        <Box display="flex">
          <TextField
            type="text"
            placeholder="Add a new todo"
            value={newtodo}
            onChange={(e) => {
              setnewtodo(e.target.value);
              setTitleError(false);
            }}
            variant="outlined"
            fullWidth
            color="warning"
            error={titleError}
          
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
      </Box>
    </ThemeProvider>
  );
};

export default Add_Form;
