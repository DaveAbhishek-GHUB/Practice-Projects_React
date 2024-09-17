/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import * as Yup from 'yup'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import Loginimage from '../public/mcgill-library-kHuCUkkExbc-unsplash.jpg'

function Login() {

    const initialvalues = {
        username: "",
        email: "",
        password: "",
    }

    const validationSchema = Yup.object({
        username: Yup.string().required("Username required!"),
        email: Yup.string().email("Invalid email address").required("Email required!"),
        password: Yup.string().required("Password required!"),
    })

    const onSubmit = (values) => {
        console.log("User's Data: ", values);
    }

    const handleKeyDown = (event) => {
        if (event.key == " " && event.target.selectionStart == 0) {
          event.preventDefault();
        }
      };

  return (
    <>
    <Navbar/>
    <div className="main-container w-full flex p-[3vw]">
        <div className="Register-poster w-1/2 h-[100vh]">
            <img className='rounded-[1vw] w-full h-full object-cover' src={Loginimage} alt="" />
        </div>
        <div className="form-secton p-[2vw]">
            <h1 className='w-full font-serif text-[2.5vw] font-semibold'>Login   to join our art gallary</h1>
        <Formik initialValues={initialvalues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className='flex flex-col gap-10 p-[3vw] mt-[3vw]'>
                <div className="forUsername w-full flex flex-col">
                    <div className="inputField w-full flex justify-between gap-8">
                    <span className='font-sans text-[1.2vw] font-semibold'>Enter username: </span>
                    <Field className="border-black w-[60%] border-[1px] rounded-xl text-[1vw] p-2" onKeyPress={handleKeyDown} name="username" id="userName"/>
                    </div>
                    <ErrorMessage component="div" className='text-red-400 text-[1vw]' name='username' id='userName'/>
                </div>

                <div className="forEmail w-full flex flex-col">
                    <div className="inputField w-full flex justify-between gap-8">
                    <span className='font-sans text-[1.2vw] font-semibold'>Enter Email: </span>
                    <Field type="email" className="border-black w-[60%] border-[1px] rounded-xl text-[1vw] p-2" onKeyPress={handleKeyDown} name="email" id="Email"/>
                    </div>
                    <ErrorMessage component="div" className='text-red-400 text-[1vw]' name='email' id='Email'/>
                </div>

                <div className="forPassword w-full flex flex-col">
                    <div className="inputField w-full flex justify-between gap-8">
                    <span className='font-sans text-[1.2vw] font-semibold'>Enter Password: </span>
                    <Field type="password" className="border-black w-[60%] border-[1px] rounded-xl text-[1vw] p-2" onKeyPress={handleKeyDown} name="password" id="Password"/>
                    </div>
                    <ErrorMessage component="div" className='text-red-400 text-[1vw]' name='password' id='Password'/>
                </div>

                <button className='bg-orange-400 text-white py-[1vw] w-[10vw] rounded-xl' type='submit'>Register</button>
            </Form>
        </Formik>
        </div>
    </div>
    </>
  )
}

export default Login