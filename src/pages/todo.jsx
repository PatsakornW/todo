import React, { useState } from "react";
import Add_Form from "../components/add_form";
import Todo_Item from "../components/todo_item";
import { Navigate, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const Todo = () => {
  const [todo, settodo] = useState([]);
  const [newtodo, setnewtodo] = useState("");
  const [editid, seteditid] = useState(null);
  const [todoId, setTodoId] = useState(0);
  const [titleError, setTitleError] = useState(false);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const add_todo = (e) => {
    e.preventDefault();
    if (editid) {
      const checkEditTitle = todo.some(
        (item) => item.title === newtodo && item.id !== editid
      );
      if (checkEditTitle) {
        setTitleError(true);
      } else {
        const update = todo.map((item) => {
          if (item.id === editid) {
            return { ...item, title: newtodo };
          }
          return item;
        });
        settodo(update);
        seteditid(null);
        setnewtodo("");
        setTitleError(false);
      }
    } else {
      const checkNewTitle = todo.some((item) => item.title === newtodo);
      if (checkNewTitle) {
        setTitleError(true);
      } else {
        const item = {
          id: todoId + 1,
          title: newtodo,
        };
        settodo([...todo, item]);
        setnewtodo("");
        setTodoId(todoId + 1);
      }
    }
  };
  const edit_todo = (id) => {
    seteditid(id);
    const edit = todo.find((item) => item.id == id);
    setnewtodo(edit.title);
  };

  const delete_todo = (id) => {
    const delete_item = todo.filter((item) => item.id !== id);
    settodo(delete_item);
  };

  const handleDeleteUserData = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <Box>
      {userData ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Card sx={{ maxWidth: 400, borderRadius: "10px" }}>
            <CardContent>
              <Add_Form
                add_todo={add_todo}
                newtodo={newtodo}
                setnewtodo={setnewtodo}
                editid={editid}
                setTitleError={setTitleError}
                titleError={titleError}
              />
              {todo.map((data) => (
                <Todo_Item
                  key={data.id}
                  data={data}
                  edit_todo={edit_todo}
                  delete_todo={delete_todo}
                />
              ))}
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button onClick={handleDeleteUserData} color="error">
                <Typography sx={{ fontSize: "12px" }}>
                  ** Remove userData in Local storage **
                </Typography>
              </Button>
            </CardActions>
          </Card>
        </Box>
      ) : (
        <Navigate to={"/"} />
      )}
    </Box>
  );
};

export default Todo;
