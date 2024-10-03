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
          name: "age",
          selector: (row) => row.age,
        },
        {
          name: "mobile number",
          selector: (row) => row["mobile number"],
        },
      ];
      
      const data = [
        {
          id: 1,
          username: "John Wick",
          email: "johnwick@gmail.com",
          age: "boogeyman123",
          "mobile number": "35XXXXXXXX",
        },
        {
          id: 2,
          username: "John Snow",
          email: "johnsnow@gmail.com",
          age: "winteriscoming",
          "mobile number": "25XXXXXXXX",
        },
        {
          id: 3,
          username: "jemmylenister",
          email: "jemmylenister@gmail.com",
          age: "hearmeRoar",
          "mobile number": "40XXXXXXXX",
        },
        {
          id: 4,
          username: "Arya Stark",
          email: "aryastark@gmail.com",
          age: "valarMorghulis",
          "mobile number": "18XXXXXXXX",
        },
        {
          id: 5,
          username: "Daenerys Targaryen",
          email: "motherofdragons@gmail.com",
          age: "dracarys",
          "mobile number": "22XXXXXXXX",
        },
        {
          id: 6,
          username: "Tyrion Lannister",
          email: "tyrionlannister@gmail.com",
          age: "iDrinkAndIKnowThings",
          "mobile number": "38XXXXXXXX",
        },
        {
          id: 7,
          username: "Sherlock Holmes",
          email: "sherlockholmes@gmail.com",
          age: "elementaryMyDearWatson",
          "mobile number": "40XXXXXXXX",
        },
        {
          id: 8,
          username: "Tony Stark",
          email: "ironman@stark.com",
          age: "iAmIronMan3000",
          "mobile number": "45XXXXXXXX",
        },
        {
          id: 9,
          username: "Bruce Wayne",
          email: "batman@wayneenterprises.com",
          age: "iAmBatman",
          "mobile number": "40XXXXXXXX",
        },
        {
          id: 10,
          username: "Peter Parker",
          email: "spiderman@dailybugle.com",
          age: "withGreatPower",
          "mobile number": "23XXXXXXXX",
        },
        {
          id: 11,
          username: "Hermione Granger",
          email: "hermione@hogwarts.edu",
          age: "wingardiumLeviosa",
          "mobile number": "20XXXXXXXX",
        },
        {
          id: 12,
          username: "Luke Skywalker",
          email: "luke@jediorder.com",
          age: "useTheForce",
          "mobile number": "30XXXXXXXX",
        },
        {
          id: 13,
          username: "Leia Organa",
          email: "leia@resistance.org",
          age: "rebelPrincess",
          "mobile number": "30XXXXXXXX",
        },
        {
          id: 14,
          username: "Katniss Everdeen",
          email: "mockingjay@district12.com",
          age: "mayTheOddsBeEverInYourFavor",
          "mobile number": "17XXXXXXXX",
        },
        {
          id: 15,
          username: "Harry Potter",
          email: "chosen_one@hogwarts.edu",
          age: "expelliarmus",
          "mobile number": "18XXXXXXXX",
        },
        {
          id: 16,
          username: "Frodo Baggins",
          email: "ringbearer@shire.me",
          age: "preciousRing",
          "mobile number": "33XXXXXXXX",
        },
        {
          id: 17,
          username: "Ellen Ripley",
          email: "alienslayer@weyland.com",
          age: "getAwayFromHer",
          "mobile number": "30XXXXXXXX",
        },
        {
          id: 18,
          username: "James Bond",
          email: "007@mi6.gov.uk",
          age: "shakenNotStirred",
          "mobile number": "42XXXXXXXX",
        },
        {
          id: 19,
          username: "Wonder Woman",
          email: "diana@themyscira.com",
          age: "lassoOfTruth",
          "mobile number": "80XXXXXXXX",
        },
        {
          id: 20,
          username: "Neo",
          email: "theone@matrix.net",
          age: "followTheWhiteRabbit",
          "mobile number": "28XXXXXXXX",
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
    const handleclear = () => {
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
          onClick={handleclear}
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
          resetPaginationToggle={resetPaginationToggle}
        />
        <ReactPaginate
            breakLabel = "..."
            nextLabel = "Next"
            onPageChange={handlePageClick}
            pageCount={pageCount}
            previousLabel="Previous"
            containerClassName={"pagination flex justify-center mt-4 space-x-2"}
            pageClassName={"px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-gray-300"}
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
