/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import WelcomeImg from '../../public/birmingham-museums-trust-wKlHsooRVbg-unsplash.jpg'
import Navbar from './Navbar'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useLocation } from 'react-router-dom';

function Profile() {

    const initialvalues = {
        username: "",
        email: "",
    }

    const validationSchema = Yup.object({
        username: Yup.string().required("Username required!"),
        email: Yup.string().email("Invalid email address").required("Email required!"),
    })

    const onSubmit = (values) => {
        console.log("User's Data: ", values);
        setUsername(values.username);
        setEmail(values.email);
        setForedit(false)
    }

    const handleKeyDown = (event) => {
        if (event.key == " " && event.target.selectionStart == 0) {
          event.preventDefault();
        }
      };

    const location = useLocation();
    const [userData, setUserData] = useState(location.state.userData);
    const [username, setUsername] = useState(userData.username);
    const [email, setEmail] = useState(userData.email);
    const [password, setPassword] = useState(userData.password);
    const [gender, setGender] = useState(userData.gender);
    const [dateofbirth, setDateofbirth] = useState(userData.dateofbirth);

    const [foredit, setForedit] = useState(false);
  return (
    <>
        <div className="main-container w-full h-screen px-[1vw] py-[2vw]">
            <Navbar/>
            <div className="welcome w-full h-[25vw]">
                <img className='w-full h-full object-cover object-center rounded-2xl border-b-2' src={WelcomeImg} alt="" />
            </div>
            <div className="profile-info-wrapper flex flex-col p-[3vw]">
                <h1 className='text-[3vw] uppercase font-sans m-auto my-5'>Your Profile</h1>
                <div className="profile-info w-full flex flex-col gap-8 p-[3vw]">
                    <div className="username w-full flex gap-5 justify-between px-5">
                        <span className='text-[2vw]'>Username: </span>
                        <h4 className='text-[1.5vw] flex items-center'>{username}</h4>
                    </div>

                    <div className="Email w-full flex gap-5 justify-between px-5">
                        <span className='text-[2vw]'>Email: </span>
                        <h4 className='text-[1.5vw] flex items-center'>{email}</h4>
                    </div>

                    <div className="Gender w-full flex gap-5 justify-between px-5">
                        <span className='text-[2vw]'>Gender: </span>
                        <h4 className='text-[1.5vw] flex items-center'>{gender}</h4>
                    </div>

                    <div className="dataofbirth w-full flex gap-5 justify-between px-5">
                        <span className='text-[2vw]'>Date of brith: </span>
                        <h4 className='text-[1.5vw] flex items-center'>{dateofbirth}</h4>
                    </div>

                    <button className='bg-orange-400 w-[10vw] py-[1vw] px-[8vw] flex justify-center text-white rounded-xl m-auto' onClick={()=>{setForedit(true)}}>Edit</button>
                </div>
            </div>
            {foredit && 
                        <div className="form-secton p-[2vw]">
            <h1 className='w-full font-serif text-[2.5vw] font-semibold'>Edit your details: </h1>
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

                <button className='bg-orange-400 text-white py-[1vw] w-[10vw] rounded-xl' type='submit'>Save Changes</button>
            </Form>
        </Formik>
        </div>
            }
        </div>
    </>
  )
}

export default Profile