/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import * as Yup from "yup";
// import LoginPhoto from "../../public/Images/inside-weather-Uxqlfigh6oE-unsplash.jpg";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGoogleLogin } from "../../public/store/cartSlice";

function FashinoLogin() {
  const [userGoogleData, setUserGoogleData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValue = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username Required!"),
    email: Yup.string().email("Invalid Email!").required("Email required!"),
    password: Yup.string().required("Password required!"),
  });

  const onSubmit = (value) => {
    console.log(value);
  };

  useEffect(() => {
    if (userGoogleData) {
      console.log("users Google Data: ", userGoogleData);
    }
  }, [userGoogleData]);

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
            src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="Login w-1/2">
          <div className="heading w-full flex justify-center items-center">
            <h1 className="text-[3vw]">Welcome, Back</h1>
          </div>
          <Formik
            className="w-full"
            initialValues={initialValue}
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
                  id="Username"
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
                  id="Email"
                  component="div"
                />
              </div>

              <div className="Foremail flex flex-col gap-3 mb-2">
                <p>password:</p>
                <Field
                  className="border-2 p-1 rounded-md"
                  type="password"
                  name="password"
                  id="Password"
                />
                <ErrorMessage
                  className="text-[1vw] text-red-500"
                  name="password"
                  id="Password"
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
                <Link to="/register">
                  <p className="text-blue-500">Create account</p>
                </Link>
              </div>
            </Form>
          </Formik>
          <div className="horizontal-line w-full flex justify-center items-center">
            <div className="inner-horizontal-line w-1/2 border-2"></div>
          </div>
          <div className="LoginWithGoogle w-full flex flex-col">
            <div className="OR-heading m-auto">
              <h1 className="my-3">OR</h1>
            </div>
            <div className="GoogleLogin-wrapper w-full flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FashinoLogin;
