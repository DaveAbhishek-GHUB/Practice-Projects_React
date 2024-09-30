/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/Images/a-sleek-and-sophisticated-logo-for-a-premium-mensw-qcl4YhfuSYylk9FHcq4p1A-EcuimXWNSkC2sfryBg0i1A_cleanup.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { resetGoogleData } from "../../public/store/cartSlice";

function FashinoNavbar() {
  const GoogleData = useSelector((state) => state.cart.GoogleRegisterData);
  const dispatch = useDispatch();
  console.log("Google Data from navbar", GoogleData);

  const resetData = () => {
    dispatch(resetGoogleData());
  };
  return (
    <>
      <div className="main-navbar-container w-full h-[15vh] flex border-white border-b-[1px] bg-[#FCFCFC]">
        <div className="navlinks-wrapper w-[40%] flex justify-center items-center gap-10">
          <Link className="font-sans text-[1.3vw]" to="/">
            Home
          </Link>
          <Link className="font-sans text-[1.3vw]" to="/collections">
            Collections
          </Link>
          {GoogleData == null ? (
            <div className="flex gap-10">
              <Link className="font-sans text-[1.3vw]" to="/fashinologin">
                Login
              </Link>
              <Link className="font-sans text-[1.3vw]" to="/fashinoregister">
                Register
              </Link>
            </div>
          ) : (
            <div className="logoout">
              <button onClick={resetData}>Logout</button>
            </div>
          )}
        </div>
        <div className="logo-wrapper w-[20%] flex justify-center items-center">
          <img className="w-16" src={Logo} alt="Logo" />
        </div>
        <div className="cart-and-profile-wrapper w-[40%] flex justify-center items-center gap-10">
          <Link to="/fashinocart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="10.5"
                cy="20.5"
                r="1.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="17.5"
                cy="20.5"
                r="1.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </Link>

          <Link to="/fashinoprofile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FashinoNavbar;
