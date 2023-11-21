import React from "react";
import { TextField, Button, Container, Grid } from "@mui/material";
import { useFormik } from "formik";

const Form_regis = ({ setToggle }) => {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be at least 8 characters";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      localStorage.setItem("userData", JSON.stringify(values));
      formik.resetForm({ email: "", password: "" });
      setToggle(true)
    },
  });

  return (
    <Container>
      <Grid>
        <form onSubmit={formik.handleSubmit}>
          <Grid>
            <TextField
              sx={{ marginY: "5px" }}
              fullWidth
              id="email"
              name="email"
              type="email"
              label="Email"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid>
            <TextField
              sx={{ marginY: "5px" }}
              fullWidth
              id="password"
              name="password"
              type="password"
              label="Password"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginTop: "10px" }}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};

export default Form_regis;
