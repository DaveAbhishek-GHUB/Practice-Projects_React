/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'

function Home() {
    // const fetchData = async () => {
    //     let res = await fetch("https://mocki.io/v1/c67b68fd-d9bb-4889-97e9-df79de84a10e");
    //     let data = await res.json();
    //     console.log("JSON placeholder's data: ", data);
    // }
    // fetchData();
  return (
    <>
        <Navbar/>
        <div className="hero-wrappe w-full h-screen flex justify-center items-center">
            <h1 className='text-[5vw]'>HOME</h1>
        </div>
    </>
  )
}

export default Home