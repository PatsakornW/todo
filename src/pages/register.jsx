import React from "react";
import Form_regis from "../components/form_regis";
import { Box } from "@mui/material";

const Register = ({ setToggle }) => {
  return (
    <Box>
      <Form_regis setToggle={setToggle} />
    </Box>
  );
};

export default Register;
