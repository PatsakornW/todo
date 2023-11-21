import React from "react";
import Form_login from "../components/form_login";

const Login = ({ setToggle }) => {
  return (
    <div>
      <Form_login setToggle={setToggle} />
    </div>
  );
};

export default Login;
