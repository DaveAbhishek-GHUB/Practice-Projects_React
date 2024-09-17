/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'

function NotFound() {
  return (
    <>
      <Navbar/>
      <div className="main-container w-full h-screen flex justify-center items-center">
        <h1 className='uppercase text-[5vw]'>404 Page not found</h1>
      </div>
    </>
  )
}

export default NotFound