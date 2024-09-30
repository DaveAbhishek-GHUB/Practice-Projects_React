/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GoogleLogin } from "@react-oauth/google";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGoogleLogin } from "../../public/store/cartSlice";

function FashionSignup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    fullName: Yup.string().required("Full name is required"),
    phoneNumber: Yup.string()
      .min(10, "Must be at least 10 digits")
      .required("Phone number is required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log("Google login successful:", credentialResponse);
    dispatch(setGoogleLogin(credentialResponse));
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="main-container w-full h-[100dvh] flex p-10">
        <div className="image w-1/2 h-[100vh]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww"
            alt="..."
          />
        </div>
        <div className="Signup w-1/2">
          <div className="heading w-full flex justify-center items-center">
            <h1 className="text-[3vw]">Create an Account</h1>
          </div>
          <Formik
            className="w-full"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="w-full p-10">
              <div className="ForUsername flex flex-col gap-3 mb-2">
                <p>Username:</p>
                <Field
                  className="border-2 p-1 rounded-md"
                  type="text"
                  name="username"
                  id="Username"
                />
                <ErrorMessage
                  className="text-[1vw] text-red-500"
                  name="username"
                  component="div"
                />
              </div>

              <div className="Foremail flex flex-col gap-3 mb-2">
                <p>Email:</p>
                <Field
                  className="border-2 p-1 rounded-md"
                  type="email"
                  name="email"
                  id="Email"
                />
                <ErrorMessage
                  className="text-[1vw] text-red-500"
                  name="email"
                  component="div"
                />
              </div>

              <div className="Forpassword flex flex-col gap-3 mb-2">
                <p>Password:</p>
                <Field
                  className="border-2 p-1 rounded-md"
                  type="password"
                  name="password"
                  id="Password"
                />
                <ErrorMessage
                  className="text-[1vw] text-red-500"
                  name="password"
                  component="div"
                />
              </div>

              <div className="ForConfirmPassword flex flex-col gap-3 mb-2">
                <p>Confirm Password:</p>
                <Field
                  className="border-2 p-1 rounded-md"
                  type="password"
                  name="confirmPassword"
                  id="ConfirmPassword"
                />
                <ErrorMessage
                  className="text-[1vw] text-red-500"
                  name="confirmPassword"
                  component="div"
                />
              </div>

              <div className="ForFullName flex flex-col gap-3 mb-2">
                <p>Full Name:</p>
                <Field
                  className="border-2 p-1 rounded-md"
                  type="text"
                  name="fullName"
                  id="FullName"
                />
                <ErrorMessage
                  className="text-[1vw] text-red-500"
                  name="fullName"
                  component="div"
                />
              </div>

              <div className="ForPhoneNumber flex flex-col gap-3 mb-2">
                <p>Phone Number:</p>
                <Field
                  className="border-2 p-1 rounded-md"
                  type="tel"
                  name="phoneNumber"
                  id="PhoneNumber"
                />
                <ErrorMessage
                  className="text-[1vw] text-red-500"
                  name="phoneNumber"
                  component="div"
                />
              </div>

              <div className="button flex justify-between items-center">
                <button
                  className="bg-[#C2AA8B] text-white p-2 w-[10vw] hover:scale-105 rounded-md"
                  type="submit"
                >
                  Sign Up
                </button>
                <Link to="/login">
                  <p className="text-blue-500">Already have a account</p>
                </Link>
              </div>
            </Form>
          </Formik>
          <div className="horizontal-line w-full flex justify-center items-center">
            <div className="inner-horizontal-line w-1/2 border-2"></div>
          </div>
          <div className="SignupWithGoogle w-full flex flex-col">
            <div className="OR-heading m-auto">
              <h1 className="my-3">OR</h1>
            </div>
            <div className="GoogleSignup-wrapper w-full flex justify-center my-5">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={() => {
                  console.log("Signup Failed");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FashionSignup;
