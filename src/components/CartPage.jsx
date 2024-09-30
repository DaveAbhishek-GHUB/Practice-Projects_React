/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../public/store/cartSlice";

function CartPage() {
  const cartedItems = useSelector((state) => state.cart.items);
  const Total = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const removeFromCart = (itemId, price) => {
    dispatch(remove(itemId));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="heading w-full flex justify-center mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold myFonts">
            Your Cart
          </h1>
        </div>
        <div className="bg-white rounded-lg overflow-hidden">
          {cartedItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-b border-gray-200 py-4 px-6"
            >
              <div className="flex-shrink-0 w-24 h-24">
                <img
                  className="object-cover w-full h-full rounded"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="ml-4 flex-grow">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 text-sm text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <div className="bg-gray-100 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
            <div className="border-t border-gray-300 my-2"></div>
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${Total}</span>
            </div>
            <button className="w-full bg-[#642F1A] text-white py-2 px-4 rounded-md mt-4 hover:bg-[#4e2413]">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
