/* eslint-disable no-unused-vars */
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import registerImage from "../../public/boston-public-library-YoK5pBcSY8s-unsplash.jpg";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

function FashinoRegister() {
  const navigate = useNavigate();

  const initialvalues = {
    username: "",
    email: "",
    password: "",
    gender: "",
    dateofbirth: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().min(2, "You need to incert atleast 2 values").required("Username required!"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email required!"),
    password: Yup.string().required("Password required!"),
    gender: Yup.string().required("Gender required!"),
    dateofbirth: Yup.string().required("Date of birth required!"),
  });

  const onSubmit = (values) => {
    console.log("User's Data: ", values);
    navigate("/profile", { state: { userData: values } });
  };

  const handleKeyDown = (event) => {
    if (event.key == " " && event.target.selectionStart == 0) {
      event.preventDefault();
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg overflow-hidden md:flex">
          <div className="md:w-1/2">
            <img
              className="h-full w-full object-cover"
              src={registerImage}
              alt="Art Gallery"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-8">
              Register to join our art gallery
            </h1>
            <Formik
              initialValues={initialvalues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="space-y-6">
                <div>
                  <label
                    htmlFor="userName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <Field
                    className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onKeyPress={handleKeyDown}
                    name="username"
                    id="userName"
                  />
                  <ErrorMessage
                    component="div"
                    className="mt-1 text-sm text-red-600"
                    name="username"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onKeyPress={handleKeyDown}
                    name="email"
                    id="Email"
                  />
                  <ErrorMessage
                    component="div"
                    className="mt-1 text-sm text-red-600"
                    name="email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onKeyPress={handleKeyDown}
                    name="password"
                    id="Password"
                  />
                  <ErrorMessage
                    component="div"
                    className="mt-1 text-sm text-red-600"
                    name="password"
                  />
                </div>

                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                  </span>
                  <div className="flex items-center space-x-6">
                    <label className="inline-flex items-center">
                      <Field
                        type="radio"
                        name="gender"
                        value="male"
                        className="form-radio text-indigo-600"
                      />
                      <span className="ml-2">Male</span>
                    </label>
                    <label className="inline-flex items-center">
                      <Field
                        type="radio"
                        name="gender"
                        value="female"
                        className="form-radio text-indigo-600"
                      />
                      <span className="ml-2">Female</span>
                    </label>
                  </div>
                  <ErrorMessage
                    component="div"
                    className="mt-1 text-sm text-red-600"
                    name="gender"
                  />
                </div>
              

                <div>
                  <label
                    htmlFor="Date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Birth
                  </label>
                  <Field
                    type="date"
                    name="dateofbirth"
                    id="Date"
                    className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    component="div"
                    className="mt-1 text-sm text-red-600"
                    name="dateofbirth"
                  />
                </div>

                

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register
                  </button>
                </div>
              </Form>
            </Formik>
            <div className="signup-with-google w-full flex justify-center mt-5">
              <div className="inner-wrapper w-full flex flex-col gap-3">
            <div className="google-login-wrapper m-auto">
            <GoogleLogin
            onSuccess={(credentialResponse) => {
                console.log("Users'Data:",credentialResponse);
                navigate('/');
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FashinoRegister;
