import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import "./register.scss";
import { axiosInstance } from "../../config";



// LOgin
const Register = () => {
   const navigate = useNavigate();
   const [err, setErr] = useState("");
   const [isLoading, setIsLoading] = useState(false);
  const initialValues = {
     username: '',
     name: "",
     surname: "",
     email: "",
     password: "",
     address: "",
     country: "",
   };


  const onSubmit = async (values) => {
    const user = { ...values };
    setIsLoading(true)
   await axiosInstance
     .post("/signup", user)
     .then((res) => {
       console.log(res.data);
       setIsLoading(false);
       navigate("/");
     })
     .catch((error) => {
       setErr(error.response.data);
       console.log(error.response.data);
       setIsLoading(false);
     });
  };
  // validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required('username id required').min(3).max(30),
    name: Yup.string().required("name is required").min(3),
    surname: Yup.string().required("surname is required").min(3),
    email: Yup.string()
      .email("invalid email format")
      .required("email is required"),
    password: Yup.string().required("password is required").min(6),
    address: Yup.string().required("address is required"),
    country: Yup.string().required("country is required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <motion.div
      initial={{ translateY: -600 }}
      animate={{ translateY: 0 }}
      exit={{ translateY: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="register">
        <div className="newContainer">
          <div className="bottom mt-5">
            <div className="left-r">
              <h1>Sign Up</h1>
              <img src="./assets/sign.png" alt="" />
            </div>
            <div className="right-register">
              <form onSubmit={formik.handleSubmit}>
                <div className="all-input">
                  {/* Image */}
                  {/* <div className="formInput">
                <label htmlFor="file">
                  Image: <i className=" fa fa-cloud-upload icon"></i>
                </label>
                <input
                  type="file"
                  id="file"
                  // onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                  {...formik.getFieldProps("profile_picture")}
                />
              </div> */}
                  {/* userame */}
                  <div className="formInput">
                    <label htmlFor="username" className="form-label">
                      Username<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className={
                        formik.touched.username && formik.errors.username
                          ? "invalid"
                          : "valid form-control"
                      }
                      id="username"
                      {...formik.getFieldProps("username")}
                    />

                    {formik.touched.username && formik.errors.username ? (
                      <p className="err">{formik.errors.username}</p>
                    ) : null}
                  </div>
                  {/* Name */}
                  <div className="formInput">
                    <label htmlFor="Name" className="form-label">
                      Name<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className={
                        formik.touched.name && formik.errors.name
                          ? "invalid"
                          : "valid form-control"
                      }
                      id="Name"
                      {...formik.getFieldProps("name")}
                    />

                    {formik.touched.name && formik.errors.name ? (
                      <p className="err">{formik.errors.name}</p>
                    ) : null}
                  </div>
                  {/* Surname */}
                  <div className="formInput">
                    <label htmlFor="surname" className="form-label">
                      Surname<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className={
                        formik.touched.surname && formik.errors.surname
                          ? "invalid"
                          : "valid form-control"
                      }
                      id="surname"
                      {...formik.getFieldProps("surname")}
                    />

                    {formik.touched.surname && formik.errors.surname ? (
                      <p className="err">{formik.errors.surname}</p>
                    ) : null}
                  </div>
                  {/* Email */}
                  <div className="formInput">
                    <label htmlFor="email" className="form-label">
                      Email<sup>*</sup>
                    </label>
                    <input
                      type="email"
                      className={
                        formik.touched.email && formik.errors.email
                          ? "invalid"
                          : "valid form-control"
                      }
                      id="email"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <p className="err">{formik.errors.email}</p>
                    ) : null}
                    {err ? <div className="err">{err}</div> : null}
                  </div>
                  {/* Password */}
                  <div className="formInput">
                    <label htmlFor="password" className="form-label">
                      Password<sup>*</sup>
                    </label>
                    <input
                      type="password"
                      className={
                        formik.touched.password && formik.errors.password
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
                  {/* Address */}
                  <div className="formInput">
                    <label htmlFor="address" className="form-label">
                      Address<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className={
                        formik.touched.address && formik.errors.address
                          ? "invalid"
                          : "valid form-control"
                      }
                      id="address"
                      {...formik.getFieldProps("address")}
                    />

                    {formik.touched.address && formik.errors.address ? (
                      <p className="err">{formik.errors.address}</p>
                    ) : null}
                  </div>
                  {/* Country */}
                  <div className="formInput">
                    <label htmlFor="country" className="form-label">
                      Country<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className={
                        formik.touched.country && formik.errors.country
                          ? "invalid"
                          : "valid form-control"
                      }
                      id="country"
                      {...formik.getFieldProps("country")}
                    />

                    {formik.touched.country && formik.errors.country ? (
                      <p className="err">{formik.errors.country}</p>
                    ) : null}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-75">
                  {isLoading ? (
                    <i className="fa fa-spinner fa-spin"></i>
                  ) : (
                    "Register"
                  )}
                </button>
              </form>
              <p className="text-center mt-3 ">
                Do you have an account{" "}
                <span
                  className="text-primary"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/")}
                >
                  Login here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
