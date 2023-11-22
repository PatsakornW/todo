import React from "react";
import { Typography,Button, Tooltip, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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
      <Box sx={{ display: "flex",gap:"5px" }}>
        <Tooltip title="Edit">
          <Button variant="contained" color="primary" onClick={() => edit_todo(data.id)} sx={{minWidth:"5px"}}>
            <EditIcon  fontSize="small"/>
          </Button>
        </Tooltip>

        <Tooltip title="Remove ">
          <Button variant="contained" color="error" onClick={() => delete_todo(data.id)} sx={{minWidth:"5px"}}>
            <DeleteIcon fontSize="small"/>
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Todo_Item;
