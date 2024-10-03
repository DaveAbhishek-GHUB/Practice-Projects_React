/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Navbar from "./Navbar";
import ReactPaginate from "react-paginate";

const Datatablecomponentwithfilter = () => {
  const columns = [
    {
      name: "username",
      selector: (row) => row.username,
    },
    {
      name: "email",
      selector: (row) => row.email,
    },
    {
      name: "password",
      selector: (row) => row.password,
    },
    {
      name: "age",
      selector: (row) => row.age,
    },
  ];

  const data = [
    {
      id: 1,
      username: "John Wick",
      email: "johnwick@gmail.com",
      password: "boogeyman123",
      age: 35,
    },
    {
      id: 2,
      username: "John Snow",
      email: "johnsnow@gmail.com",
      password: "winteriscoming",
      age: 25,
    },
    {
      id: 3,
      username: "jemmylenister",
      email: "jemmylenister@gmail.com",
      password: "hearmeRoar",
      age: 40,
    },
    {
      id: 4,
      username: "Arya Stark",
      email: "aryastark@gmail.com",
      password: "valarMorghulis",
      age: 18,
    },
    {
      id: 5,
      username: "Daenerys Targaryen",
      email: "motherofdragons@gmail.com",
      password: "dracarys",
      age: 22,
    },
    {
      id: 6,
      username: "Tyrion Lannister",
      email: "tyrionlannister@gmail.com",
      password: "iDrinkAndIKnowThings",
      age: 38,
    },
    {
      id: 7,
      username: "Sherlock Holmes",
      email: "sherlockholmes@gmail.com",
      password: "elementaryMyDearWatson",
      age: 40,
    },
    {
      id: 8,
      username: "Tony Stark",
      email: "ironman@stark.com",
      password: "iAmIronMan3000",
      age: 45,
    },
    {
      id: 9,
      username: "Bruce Wayne",
      email: "batman@wayneenterprises.com",
      password: "iAmBatman",
      age: 40,
    },
    {
      id: 10,
      username: "Peter Parker",
      email: "spiderman@dailybugle.com",
      password: "withGreatPower",
      age: 23,
    },
    {
      id: 11,
      username: "Hermione Granger",
      email: "hermione@hogwarts.edu",
      password: "wingardiumLeviosa",
      age: 20,
    },
    {
      id: 12,
      username: "Luke Skywalker",
      email: "luke@jediorder.com",
      password: "useTheForce",
      age: 30,
    },
    {
      id: 13,
      username: "Leia Organa",
      email: "leia@resistance.org",
      password: "rebelPrincess",
      age: 30,
    },
    {
      id: 14,
      username: "Katniss Everdeen",
      email: "mockingjay@district12.com",
      password: "mayTheOddsBeEverInYourFavor",
      age: 17,
    },
    {
      id: 15,
      username: "Harry Potter",
      email: "chosen_one@hogwarts.edu",
      password: "expelliarmus",
      age: 18,
    },
    {
      id: 16,
      username: "Frodo Baggins",
      email: "ringbearer@shire.me",
      password: "preciousRing",
      age: 33,
    },
    {
      id: 17,
      username: "Ellen Ripley",
      email: "alienslayer@weyland.com",
      password: "getAwayFromHer",
      age: 30,
    },
    {
      id: 18,
      username: "James Bond",
      email: "007@mi6.gov.uk",
      password: "shakenNotStirred",
      age: 42,
    },
    {
      id: 19,
      username: "Wonder Woman",
      email: "diana@themyscira.com",
      password: "lassoOfTruth",
      age: 800,
    },
    {
      id: 20,
      username: "Neo",
      email: "theone@matrix.net",
      password: "followTheWhiteRabbit",
      age: 28,
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
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setItemOffset(0);
      }
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

  return (
    <>
      <Navbar />
      <div className="main-container w-full h-screen">
        <DataTable
          columns={columns}
          data={currentItems}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
        />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName={"pagination flex justify-center mt-4 space-x-2"}
          pageClassName={"px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"}
          activeClassName={"bg-blue-500 text-white"}
          previousClassName={"px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"}
          nextClassName={"px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"}
          disabledClassName={"opacity-50 cursor-not-allowed"}
        />
      </div>
    </>
  );
};

export default Datatablecomponentwithfilter;