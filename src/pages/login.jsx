import React from "react";
import Form_login from "../components/form_login";
import { Box } from "@mui/material";

const Login = ({ setToggle }) => {
  return (
    <Box>
      <Form_login setToggle={setToggle} />
    </Box>
  );
};

export default Login;
