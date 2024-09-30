// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/Images/a-sleek-and-sophisticated-logo-for-a-premium-mensw-qcl4YhfuSYylk9FHcq4p1A-EcuimXWNSkC2sfryBg0i1A_cleanup.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { resetGoogleData } from "../../public/store/cartSlice";

function FashinoFooter() {
  const GoogleData = useSelector((state) => state.cart.GoogleRegisterData);
  const dispatch = useDispatch();

  const resetData = () => {
    dispatch(resetGoogleData());
  };

  return (
    <footer className="main-footer-container w-full bg-[#FCFCFC] border-t border-gray-200 py-8">
      <div className="footer-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-logo-section flex flex-col items-center md:items-start">
            <img className="w-16 mb-4" src={Logo} alt="Fashino Logo" />
            <p className="text-sm text-gray-600">Premium furniture</p>
          </div>
          
          <div className="footer-links">
            <h3 className="font-sans text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link className="font-sans text-gray-600 hover:text-gray-900" to="/">Home</Link></li>
              <li><Link className="font-sans text-gray-600 hover:text-gray-900" to="/collections">Collections</Link></li>
            </ul>
          </div>
          
          <div className="footer-account">
            <h3 className="font-sans text-lg font-bold mb-4">Account</h3>
            <ul className="space-y-2">
              {GoogleData == null ? (
                <>
                  <li><Link className="font-sans text-gray-600 hover:text-gray-900" to="/fashinologin">Login</Link></li>
                  <li><Link className="font-sans text-gray-600 hover:text-gray-900" to="/fashinoregister">Register</Link></li>
                </>
              ) : (
                <li><button className="font-sans text-gray-600 hover:text-gray-900" onClick={resetData}>Logout</button></li>
              )}
              <li><Link className="font-sans text-gray-600 hover:text-gray-900" to="/fashinoprofile">Profile</Link></li>
            </ul>
          </div>
          
          <div className="footer-cart">
            <h3 className="font-sans text-lg font-bold mb-4">Shopping</h3>
            <ul className="space-y-2">
              <li>
                <Link className="font-sans text-gray-600 hover:text-gray-900 flex items-center" to="/fashinocart">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} className="mr-2">
                    <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Fashino. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FashinoFooter;