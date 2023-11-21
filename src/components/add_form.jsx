import React from "react";
import { TextField, Button, Box } from "@mui/material";

const Add_Form = ({ add_todo, newtodo, setnewtodo, editid }) => {
  return (
    <form onSubmit={add_todo} className="mt-4">
      <Box display="flex">
        <TextField
          type="text"
          placeholder="Add a new todo"
          value={newtodo}
          onChange={(e) => setnewtodo(e.target.value)}
          variant="outlined"
          fullWidth
          sx={{ borderRadius: "4px 0 0 4px" }}
        />
        <Button
          type="submit"
          variant="contained"
          color={editid ? "success" : "primary"}
          sx={{
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
        >
          {editid ? "Update" : "Add"}
        </Button>
      </Box>
    </form>
  );
};

export default Add_Form;
