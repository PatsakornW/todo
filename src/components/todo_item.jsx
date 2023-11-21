import React from "react";
import { Typography, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

const Todo_Item = ({ data, edit_todo, delete_todo }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        padding: "8px",
        marginTop: "8px",
      }}
    >
      <Typography sx={{ flexGrow: 1, marginRight: "10px" }}>
        {data.title}
      </Typography>
      <Box sx={{ display: "flex" }}>
        <IconButton onClick={() => edit_todo(data.id)} color="primary">
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => delete_todo(data.id)} color="error">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Todo_Item;
