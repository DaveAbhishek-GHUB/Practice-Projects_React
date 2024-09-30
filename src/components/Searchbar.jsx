/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from './Navbar'
import { FaSearch } from 'react-icons/fa'
import { json } from 'react-router-dom';

function Searchbar() {  
    const [input, setinput] = useState("");
    const [results, setResults] = useState([]);

    const fetchData = async (value) => {
        await fetch("https://mocki.io/v1/909651d3-d2ec-4ab5-86a6-272ea536bce5")
        .then((Response) => Response.json())
        .then((json)=> {
            const res = json.filter((user)=>{
                return value && user && user.name && user.name.toLowerCase().includes(value);
            });
            // console.log(results);
            setResults(res);
        }); 
    }

    const handleChange = (value) => {
        setinput(value);
        fetchData(value);
        console.log(input);
    }
    
  return (
    <>
    <Navbar/>
    <div className="main-container w-full h-screen flex flex-col items-center">
        <div className="searchbar w-1/2 bg-white flex items-center gap-5 p-3 rounded-lg mt-[10vw]">
        <div className="icon">
            <FaSearch/>
        </div>
            <div className="inputtag-wrapper w-full">
            <input value={input} onChange={(e) => handleChange(e.target.value)} className='border-2 px-3 py-2 rounded-md w-full text-[1vw] outline-none' type="text" placeholder='search' />
            </div>
        </div>
        <div className="search-results w-1/2 px-10 py- h-[30vw] overflow-scroll">
        {results.map((results, id) => {
            return  <>
            <div className="main-result-container" key={id}>
                <div className="result-wrapper"><p className='my-3 p-3 rounded-md border-b-2 cursor-pointer hover:bg-gray-50' onClick={(e)=>alert(`you clicked on ${results.name}`)}>{results.name}</p></div>
            </div>
            </>
        })}
        </div>
    </div>
    </>
  )
}

export default Searchbar