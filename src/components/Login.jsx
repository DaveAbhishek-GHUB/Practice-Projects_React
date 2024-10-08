/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik, Form, FieldArray } from "formik";
import Loginimage from "../../public/mcgill-library-kHuCUkkExbc-unsplash.jpg";
import { Button } from "react-bootstrap";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function Login() {
  const initialvalues = {
    username: "",
    email: "",
    password: "",
    addresses: [""],
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username required!"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email required!"),
    password: Yup.string().required("Password required!"),
    addresses: Yup.array()
      .of(Yup.string().required("Address required!"))
      .min(1, "At least one address is required!"),
  });

  const onSubmit = (values) => {
    console.log("User's Data: ", values);
  };

  const handleKeyDown = (event) => {
    if (event.key == " " && event.target.selectionStart == 0) {
      event.preventDefault();
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-4 sm:p-6 md:p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-full object-cover"
              src={Loginimage}
              alt="Login"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-gray-800">
              Login to join our art gallery
            </h1>
            <Formik
              initialValues={initialvalues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="userName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Enter username:
                  </label>
                  <Field
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    onKeyPress={handleKeyDown}
                    name="username"
                    id="userName"
                  />
                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-sm"
                    name="username"
                    id="userName"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Enter Email:
                  </label>
                  <Field
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    onKeyPress={handleKeyDown}
                    name="email"
                    id="Email"
                  />
                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-sm"
                    name="email"
                    id="Email"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Enter Password:
                  </label>
                  <Field
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    onKeyPress={handleKeyDown}
                    name="password"
                    id="Password"
                  />
                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-sm"
                    name="password"
                    id="Password"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Addresses:
                  </label>
                  <FieldArray name="addresses">
                    {(fieldArrayProps) => {
                      console.log("fieldArrayProps", fieldArrayProps);
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { addresses } = values;
                      return (
                        <div className="space-y-2">
                          {addresses.map((address, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <Field
                                as="textarea"
                                className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                name={`addresses[${index}]`}
                                placeholder={
                                  index === 0
                                    ? "Home Address"
                                    : "Office Address"
                                }
                              />
                              <div className="flex space-x-2">
                                {index > 0 && (
                                  <Button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                  >
                                    -
                                  </Button>
                                )}
                                {index === addresses.length - 1 &&
                                  addresses.length < 2 && (
                                    <Button
                                      type="button"
                                      onClick={() => push("")}
                                      className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                    >
                                      +
                                    </Button>
                                  )}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    }}
                  </FieldArray>
                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-sm"
                    name="addresses"
                    id="Addresses"
                  />
                </div>

                <button
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  type="submit"
                >
                  Login
                </button>
              </Form>
            </Formik>
            <div className="signup-with-google w-full flex justify-center mt-5">
              <div className="inner-wrapper w-full flex flex-col gap-3">
            <h1 className="m-auto">Signup with google</h1>
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
    </>
  );
}

export default Login;