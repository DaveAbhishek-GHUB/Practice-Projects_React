/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import DataTable from 'react-data-table-component';

function Searchthemovie() {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);

    const fetchData = (value) => {
        fetch("https://mocki.io/v1/6f99a411-fbcd-421e-9054-16d79c452ad6")
        .then(response => response.json())
        .then((json) => {
                const res = json.filter((movie)=>{
                    return value && movie.movie_name && movie.movie_name.toLowerCase().includes(value.toLowerCase());
                })
            // console.log("result", res);
            setData(res)
        });
    }

    const columns = [
        {
            name: "Movie_name",
            selector: row=> row.movie_name,
        },
        {
            name: "Release_date",
            selector: row=> row.release_date
        },
        {
            name: "IMDB rating",
            selector: row=> row.imdb_rating
        }
    ]


    const handleChange = (value) => {
        console.log(value);
        fetchData(value);
        setInput(value);
        // console.log("Data", data);
    }

    useEffect(()=>{
        fetchData('');
    }, []);
  return (
    <>
    <Navbar/>
        <div className="main-container w-full h-screen">
            <div className="search-wrapper mt-[5vw] w-full h-[10vw] flex justify-center items-center">
                <h1 className='mx-3'>Search movie here:</h1>
                <input className='border-2 w-1/2 p-2 rounded-xl' type="text" value={input} onChange={(e)=>{handleChange(e.target.value)}}/>
            </div>
            <div className="show-result w-full p-10">
                <DataTable columns={columns} data={data} pagination/>
            </div>
        </div>
    </>
  )
}

export default Searchthemovie

// https://mocki.io/v1/6f99a411-fbcd-421e-9054-16d79c452ad6