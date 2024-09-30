/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import Navbar from './Navbar';



const Datatablecomponentwithfilter = () => {
    const columns = [
        {
            name: "username",
            selector: row=> row.username
        },
        {
            name: "email",
            selector: row=> row.email,
        }
    ];

    const data = [
            {
                id: 1,
                username: "John Wick",
                email: "johnwick@gmail.com"
            },
            {
                id: 2,
                username: "John Snow",
                email: "johnsnow@gmail.com"
            },
            {
                id: 3,
                username: "jemmylenister",
                email: "jemmylenister@gmail.com"
            },
            {
                id: 4,
                username: "Arya Stark",
                email: "aryastark@gmail.com"
            },
            {
                id: 5,
                username: "Daenerys Targaryen",
                email: "motherofdragons@gmail.com"
            },
            {
                id: 6,
                username: "Tyrion Lannister",
                email: "tyrionlannister@gmail.com"
            },
            {
                id: 7,
                username: "Sherlock Holmes",
                email: "sherlockholmes@gmail.com"
            },
            {
                id: 8,
                username: "Tony Stark",
                email: "ironman@stark.com"
            },
            {
                id: 9,
                username: "Bruce Wayne",
                email: "batman@wayneenterprises.com"
            },
            {
                id: 10,
                username: "Peter Parker",
                email: "spiderman@dailybugle.com"
            },
            {
                id: 11,
                username: "Hermione Granger",
                email: "hermione@hogwarts.edu"
            },
            {
                id: 12,
                username: "Luke Skywalker",
                email: "luke@jediorder.com"
            },
            {
                id: 13,
                username: "Leia Organa",
                email: "leia@resistance.org"
            },
            {
                id: 14,
                username: "Katniss Everdeen",
                email: "mockingjay@district12.com"
            },
            {
                id: 15,
                username: "Harry Potter",
                email: "chosen_one@hogwarts.edu"
            },
            {
                id: 16,
                username: "Frodo Baggins",
                email: "ringbearer@shire.me"
            },
            {
                id: 17,
                username: "Ellen Ripley",
                email: "alienslayer@weyland.com"
            },
            {
                id: 18,
                username: "James Bond",
                email: "007@mi6.gov.uk"
            },
            {
                id: 19,
                username: "Wonder Woman",
                email: "diana@themyscira.com"
            },
            {
                id: 20,
                username: "Neo",
                email: "theone@matrix.net"
            }
    ];

    
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const filteredItems = data.filter(
        item => item.username && item.username.toLowerCase().includes(filterText.toLowerCase())
    )

    const subHeaderComponentMemo = useMemo(()=>{
        const handleclear = () => {
            if(filterText)
            setResetPaginationToggle(!resetPaginationToggle)
            setFilterText('');
        };

        return (
            <div className="flex items-center space-x-4 mb-4">
            <input
                type="text"
                placeholder="Filter By Username"
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button 
                onClick={handleclear}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Clear
            </button>
        </div>
        )
    },[filterText, resetPaginationToggle]);


  return (
    <>
        <Navbar/>
        <div className="main-container w-full h-screen">
            <DataTable columns={columns} data={filteredItems} pagination subHeader subHeaderComponent={subHeaderComponentMemo} resetPaginationToggle={resetPaginationToggle}/>
        </div>
    </>
  );
};

export default Datatablecomponentwithfilter;