import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import Alert from "@mui/material/Alert";
import "./login.scss";
import { axiosInstance } from "../../config";

const Login = ({getUserData}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState("");
  const [err, setErr] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    let user = { ...values };
    setIsLoading(true);
    await axiosInstance
      .post("/login", user)
      .then(({ data }) => {
        localStorage.setItem("userToken", data.token);
        setIsLoading(false);
        getUserData();
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        setErr(error.response.data);
        console.log(error.response.data);
        setIsLoading(false);
      });
  };

  // validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("invalid email format")
      .required("user email is required"),
    password: Yup.string().required("user password is required").min(6),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="login">
        <div>
          <img src="./assets/login.png" alt="" />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <h1>Sign In</h1>
          {err ? (
            <Alert variant="filled" severity="error">
              {err}
            </Alert>
          ) : null}
          {/* Email */}
          <div className="formInput">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={
                formik.touched.name && formik.errors.name
                  ? "invalid"
                  : "valid form-control"
              }
              id="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="err">{formik.errors.email}</p>
            ) : null}
          </div>
          {/* Password */}
          <div className="formInput">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={
                formik.touched.name && formik.errors.name
                  ? "invalid"
                  : "valid form-control"
              }
              id="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="err">{formik.errors.password}</p>
            ) : null}
          </div>

          {/* {err ? <div style={{ color: "#d14553", margin: '-15px 0' }}>{err}</div> : null} */}
          <div className="btns">
            <button type="submit" className="btn btn-outline-primary">
              {isLoading ? <i className="fa fa-spinner fa-spin"></i> : "Login"}
            </button>

            <button
              onClick={() => navigate("/register")}
              className="btn btn-outline-success mb-3 mt-3"
            >
              Create a new account
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;

/*
  to build form => 3 steps
  1 => Mannging the form state
  2 => Handling form submissiob
  3 => Vaildation and error messages

*/
