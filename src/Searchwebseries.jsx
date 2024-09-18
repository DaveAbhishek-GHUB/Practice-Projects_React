/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import DataTable from 'react-data-table-component';

function Searchwebseries() {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);

    const columns = [
        {
            name: "WebSeries Name",
            selector: row=> row.series_name
        },
        {
            name: "Release Date",
            selector: row=> row.release_date
        },
        {
            name: "IMDB Rating",
            selector: row=> row.imdb_rating
        }
    ]

    const fetchData = (value) => {
        fetch("https://mocki.io/v1/15d32e82-11a7-462d-a2e8-213329b98a68")
        .then(response => response.json())
        .then((json)=>{
            const res = json.filter((webseries)=>{
                return value && webseries.series_name && webseries.series_name.toLowerCase().includes(value.toLowerCase());
            });
            setData(res)
        });
    }

    useEffect(()=>{
        fetchData('');
    },[])

    const handleChange = (value) => {
        // console.log(value);
        fetchData(value);
        setInput(value);
    }
  return (
    <>
         <>
    <Navbar/>
        <div className="main-container w-full h-screen">
            <div className="search-wrapper mt-[5vw] w-full h-[10vw] flex justify-center items-center">
                <h1 className='mx-3'>Search WebSeries here:</h1>
                <input className='border-2 w-1/2 p-2 rounded-xl' type="text" value={input} onChange={(e)=>{handleChange(e.target.value)}}/>
            </div>
            <div className="show-result w-full p-10">
            <DataTable columns={columns} data={data} pagination/>
            </div>
        </div>
    </>
    </>
  )
}

export default Searchwebseries