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
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Mobile number",
      selector: (row) => row["mobile number"],
    },
  ];

  const data = [
    // ... your data here
  ];

  const [filterText, setFilterText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const filteredItems = data.filter((item) => {
    const matchesUsername = item.username.toLowerCase().includes(filterText.toLowerCase());
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    return matchesUsername && matchesStatus;
  });

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredItems.length;
    setItemOffset(newOffset);
  };

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText || statusFilter !== "all") {
        setResetPaginationToggle(!resetPaginationToggle);
      }
      setFilterText("");
      setStatusFilter("all");
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
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Clear
        </button>
      </div>
    );
  }, [filterText, statusFilter, resetPaginationToggle]);

  useEffect(() => {
    setItemOffset(0);
  }, [filterText, statusFilter]);

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
