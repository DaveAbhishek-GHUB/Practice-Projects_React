/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Navbar from "./Navbar";
import ReactPaginate from "react-paginate";
import "../../public/css/DataTableNavigator.css";

const Datatablecomponentwithfilter = () => {
  const columns = [
    {
      name: "Username",
      selector: (row) => row.username,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Age",
      selector: (row) => row.age,
    },
    {
      name: "Mobile number",
      selector: (row) => row["mobile number"],
    },
  ];

  const data = [
    {
      id: 1,
      username: "John Wick",
      email: "johnwick@gmail.com",
      age: "12",
      "mobile number": "35XXXXXXXX",
    },
    {
      id: 2,
      username: "John Snow",
      email: "johnsnow@gmail.com",
      age: "32",
      "mobile number": "25XXXXXXXX",
    },
    {
      id: 3,
      username: "jemmylenister",
      email: "jemmylenister@gmail.com",
      age: "43",
      "mobile number": "40XXXXXXXX",
    },
    {
      id: 4,
      username: "Arya Stark",
      email: "aryastark@gmail.com",
      age: "14",
      "mobile number": "18XXXXXXXX",
    },
    {
      id: 5,
      username: "Daenerys Targaryen",
      email: "motherofdragons@gmail.com",
      age: "87",
      "mobile number": "22XXXXXXXX",
    },
    {
      id: 6,
      username: "Tyrion Lannister",
      email: "tyrionlannister@gmail.com",
      age: "21",
      "mobile number": "38XXXXXXXX",
    },
    {
      id: 7,
      username: "Sherlock Holmes",
      email: "sherlockholmes@gmail.com",
      age: "14",
      "mobile number": "40XXXXXXXX",
    },
    {
      id: 8,
      username: "Tony Stark",
      email: "ironman@stark.com",
      age: "54",
      "mobile number": "45XXXXXXXX",
    },
    {
      id: 9,
      username: "Bruce Wayne",
      email: "batman@wayneenterprises.com",
      age: "87",
      "mobile number": "40XXXXXXXX",
    },
    {
      id: 10,
      username: "Peter Parker",
      email: "spiderman@dailybugle.com",
      age: "92",
      "mobile number": "23XXXXXXXX",
    },
    {
      id: 11,
      username: "Hermione Granger",
      email: "hermione@hogwarts.edu",
      age: "45",
      "mobile number": "20XXXXXXXX",
    },
    {
      id: 12,
      username: "Luke Skywalker",
      email: "luke@jediorder.com",
      age: "54",
      "mobile number": "30XXXXXXXX",
    },
    {
      id: 13,
      username: "Leia Organa",
      email: "leia@resistance.org",
      age: "23",
      "mobile number": "30XXXXXXXX",
    },
    {
      id: 14,
      username: "Katniss Everdeen",
      email: "mockingjay@district12.com",
      age: "54",
      "mobile number": "17XXXXXXXX",
    },
    {
      id: 15,
      username: "Harry Potter",
      email: "chosen_one@hogwarts.edu",
      age: "12",
      "mobile number": "18XXXXXXXX",
    },
    {
      id: 16,
      username: "Frodo Baggins",
      email: "ringbearer@shire.me",
      age: "32",
      "mobile number": "33XXXXXXXX",
    },
    {
      id: 17,
      username: "Ellen Ripley",
      email: "alienslayer@weyland.com",
      age: "34",
      "mobile number": "30XXXXXXXX",
    },
    {
      id: 18,
      username: "James Bond",
      email: "007@mi6.gov.uk",
      age: "43",
      "mobile number": "42XXXXXXXX",
    },
    {
      id: 19,
      username: "Wonder Woman",
      email: "diana@themyscira.com",
      age: "23",
      "mobile number": "80XXXXXXXX",
    },
    {
      id: 20,
      username: "Neo",
      email: "theone@matrix.net",
      age: "22",
      "mobile number": "28XXXXXXXX",
    },
    {
      id: 21,
      username: "Captain America",
      email: "cap@avengers.com",
      age: "32",
      "mobile number": "45XXXXXXXX",
    },
    {
      id: 22,
      username: "Thor Odinson",
      email: "thor@asgardian.com",
      age: "12",
      "mobile number": "50XXXXXXXX",
    },
    {
      id: 23,
      username: "Clark Kent",
      email: "superman@dailyplanet.com",
      age: "32",
      "mobile number": "40XXXXXXXX",
    },
    {
      id: 24,
      username: "Darth Vader",
      email: "darkside@empire.com",
      age: "54",
      "mobile number": "55XXXXXXXX",
    },
    {
      id: 25,
      username: "Indiana Jones",
      email: "indiana@archaeology.com",
      age: "34",
      "mobile number": "38XXXXXXXX",
    },
    {
      id: 26,
      username: "Wolverine",
      email: "logan@xmen.com",
      age: "54",
      "mobile number": "39XXXXXXXX",
    },
    {
      id: 27,
      username: "Lara Croft",
      email: "lara@tombraider.com",
      age: "12",
      "mobile number": "29XXXXXXXX",
    },
    {
      id: 28,
      username: "Gandalf",
      email: "gandalf@middleearth.com",
      age: "43",
      "mobile number": "60XXXXXXXX",
    },
    {
      id: 29,
      username: "Optimus Prime",
      email: "optimus@autobots.com",
      age: "12",
      "mobile number": "70XXXXXXXX",
    },
    {
      id: 30,
      username: "Black Widow",
      email: "natasha@avengers.com",
      age: "21",
      "mobile number": "35XXXXXXXX",
    },
    {
      id: 31,
      username: "Deadpool",
      email: "wade@mercwithamouth.com",
      age: "32",
      "mobile number": "33XXXXXXXX",
    },
    {
      id: 32,
      username: "Samus Aran",
      email: "samus@galactichunter.com",
      age: "16",
      "mobile number": "37XXXXXXXX",
    },
    {
      id: 33,
      username: "Doctor Strange",
      email: "strange@sorcerersupreme.com",
      age: "23",
      "mobile number": "44XXXXXXXX",
    },
    {
      id: 34,
      username: "Yoda",
      email: "yoda@jediorder.com",
      age: "27",
      "mobile number": "90XXXXXXXX",
    },
    {
      id: 35,
      username: "Jack Sparrow",
      email: "captainjack@blackpearl.com",
      age: "25",
      "mobile number": "34XXXXXXXX",
    },
    {
      id: 36,
      username: "Buzz Lightyear",
      email: "buzz@starcommand.com",
      age: "29",
      "mobile number": "22XXXXXXXX",
    },
    {
      id: 37,
      username: "Rick Sanchez",
      email: "rick@dimensionc137.com",
      age: "25",
      "mobile number": "65XXXXXXXX",
    },
    {
      id: 38,
      username: "Marty McFly",
      email: "marty@backtothefuture.com",
      age: "21",
      "mobile number": "30XXXXXXXX",
    },
    {
      id: 39,
      username: "John McClane",
      email: "john@nakatomi.com",
      age: "31",
      "mobile number": "55XXXXXXXX",
    },
    {
      id: 40,
      username: "Groot",
      email: "groot@guardians.com",
      age: "32",
      "mobile number": "80XXXXXXXX",
    },
  ];

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const filteredItems = data.filter(
    (item) =>
      item.username &&
      item.username.toLowerCase().includes(filterText.toLowerCase())
  );

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredItems.length;
    setItemOffset(newOffset);
  };

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    };

    return (
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Filter By Username"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Clear
        </button>
      </div>
    );
  }, [filterText, resetPaginationToggle]);

  useEffect(() => {
    setItemOffset(0);
  }, [filterText]);

  return (
    <>
      <Navbar />
      <div className="main-container w-full h-screen">
        <DataTable
          columns={columns}
          data={currentItems}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          resetPaginationToggle={resetPaginationToggle}
        />
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel="Previous"
          containerClassName="pagination flex justify-center mt-4 space-x-2"
          pageClassName="Navigator"
          activeClassName="bg-blue-700"
          previousClassName="px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          nextClassName="px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </>
  );
};

export default Datatablecomponentwithfilter;