import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

function Login() {
  const userData = useSelector((state) => state.cart.GoogleRegisterData);
  console.log("from Login page", userData);

  let decodedToken = {};
  if (userData && userData.credential) {
    try {
      decodedToken = jwtDecode(userData.credential);
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  return (
    <>
      <Navbar />

      <div className="main-container w-full min-h-screen flex items-center justify-center p-4 md:p-10">
        <div className="w-full max-w-6xl bg-white rounded-xl overflow-hidden flex flex-col md:flex-row">
          <div className="image w-full md:w-1/2 h-64 md:h-auto">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1621109246687-10ae613f2d8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTZ8MzYxODcwN3x8ZW58MHx8fHx8"
              alt="Profile background"
            />
          </div>
          {userData ? (
            <div className="Login w-full md:w-1/2 flex flex-col p-8">
              <div className="heading mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                  Profile
                </h1>
              </div>
              <div className="profile-info-wrapper space-y-6">
                <div className="info-item flex flex-col md:flex-row justify-between items-center p-4 rounded-lg">
                  <span className="text-xl md:text-2xl font-semibold text-gray-700 mb-2 md:mb-0">
                    Username:
                  </span>
                  <span className="text-lg md:text-xl text-white bg-[#C2AA8B] py-2 px-4 rounded-full shadow-md">
                    {decodedToken.name}
                  </span>
                </div>
                <div className="info-item flex flex-col md:flex-row justify-between items-center p-4 rounded-lg">
                  <span className="text-xl md:text-2xl font-semibold text-gray-700 mb-2 md:mb-0">
                    Email:
                  </span>
                  <span className="text-lg md:text-xl text-white bg-[#C2AA8B] py-2 px-4 rounded-full shadow-md">
                    {decodedToken.email}
                  </span>
                </div>
                <div className="info-item flex flex-col md:flex-row justify-between items-center p-4 rounded-lg">
                  <span className="text-xl md:text-2xl font-semibold text-gray-700 mb-2 md:mb-0">
                    Phone Number:
                  </span>
                  <span className="text-lg md:text-xl text-white bg-[#C2AA8B] py-2 px-4 rounded-full shadow-md">
                    10875XXXXX
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 uppercase">
                Login First
              </h1>
              <Link to="/login" className="inline-block">
                <button className="bg-[#C2AA8B] text-white text-xl font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#A08B6C] transition duration-300">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
