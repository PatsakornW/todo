import React from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const FormLogin = ({ setToggle }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { setErrors }) => {
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (!userData) {
        setErrors({
          email: "Please fill in email",
          password: "Please fill in password",
        });
        return;
      }

      if (userData.email !== values.email) {
        setErrors({ email: "Invalid email" });
      } else if (userData.password !== values.password) {
        setErrors({ password: "Invalid password" });
      } else {
        console.log("Login successful!");
        navigate("/todo");
      }
    },
  });

  return (
    <Container component={"div"}>
      <Box
        component={"form"}
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <TextField
          fullWidth
          id="email"
          name="email"
          type="email"
          label="Email Address"
          color="warning"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          type="password"
          color="warning"
          label="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>
            Do you have not account ?{" "}
          </Typography>
          <Typography
            onClick={() => setToggle(false)}
            sx={{
              fontSize: "14px",
              marginLeft: "5px",
              "&:hover": {
                color: "#ef981e",
                cursor: "pointer",
                textDecoration: "underline",
              },
            }}
          >
            Register
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          type="submit"
          color="warning"
          sx={{
            marginTop: "10px",
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default FormLogin;
