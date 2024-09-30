import React from 'react'
import Navbar from './Navbar'
import * as Yup from 'yup'
import { ErrorMessage, Field, Formik, Form, FieldArray } from 'formik'
import Loginimage from '../public/mcgill-library-kHuCUkkExbc-unsplash.jpg'
import { Button } from 'react-bootstrap'

function Login() {
    const initialvalues = {
        username: "",
        email: "",
        password: "",
        phNumbers: ['']
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
        if (event.key === " " && event.target.selectionStart === 0) {
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
                <h1 className='w-full font-serif text-[2.5vw] font-semibold'>Login to join our art gallery</h1>
                <Formik initialValues={initialvalues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form className='flex flex-col gap-10 p-[3vw] mt-[3vw]'>
                        {/* Username, Email, and Password fields remain unchanged */}
                        
                        <div className="forphNumbers w-full flex flex-col">
                            <div className="inputField w-full flex justify-between gap-8">
                                <span className='font-sans text-[1.2vw] font-semibold'>List of phone numbers: </span>
                                <FieldArray name="phNumbers">
                                {({ push, remove, form }) => (
                                    <div>
                                        {form.values.phNumbers.map((phNumber, index) => (
                                            <div key={index} className="flex items-center mb-2">
                                                <Field
                                                    type="text"
                                                    className="border-black w-full border-[1px] rounded-xl text-[1vw] p-2 mr-2"
                                                    name={`phNumbers[${index}]`}
                                                />
                                                {index > 0 && (
                                                    <Button type='button' onClick={() => remove(index)} className="mr-2">-</Button>
                                                )}
                                                {index === form.values.phNumbers.length - 1 && phNumber !== '' && (
                                                    <Button type='button' onClick={() => push('')}>+</Button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                </FieldArray>
                            </div>
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