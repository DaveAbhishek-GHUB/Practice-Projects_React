/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { add } from "../../public/store/cartSlice";

function Collections() {
  const [fetchedData, setFetchedData] = useState([]);
  const dispatch = useDispatch();

  const fetchData = () => {
    fetch("https://mocki.io/v1/441cff32-c64e-4ff6-8436-0b14ba952a16")
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
        console.log("fetchedData: ", data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (item) => {
    dispatch(add(item));
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="heading w-full flex justify-center mb-3">
          <h1 className="text-[5vw] myFonts">all products</h1>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {fetchedData.map((item) => (
            <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 h-full flex flex-col">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    className="object-cover w-full h-full"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 mb-4">${item.price}</p>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-[#642F1A] text-white py-2 px-4 rounded-md mt-auto"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Collections;
