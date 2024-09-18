/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Navbar from './Navbar';

function Datatablecomponent() {
    const [Data, setData] = useState([]);
    const columns = [
        {
            name: "name",
            selector: row=> row.name,
            sortable: true
        },
        {
            name: "username",
            selector: row=> row.username
        },
        {
            name: "email",
            selector: row=> row.email
        },
    ];

    useEffect(()=>{
        fetch("https://mocki.io/v1/2552792b-0a08-4b2a-9d26-39f30a99e322")
        .then(responce=> responce.json())
        .then(data => {
            const foematedDocument = data.map(({id, name, username, email})=>({
                name,
                username,
                email
            }))
            setData(foematedDocument)
        });
    });

  return (
    <>
    <Navbar/>
    <DataTable title="Users" columns={columns} data={Data}/>
    </>
  )
}

export default Datatablecomponent