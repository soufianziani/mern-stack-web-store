import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.length;
  const { logout } = useLogout();
  const user = JSON.parse(localStorage.getItem("user"));

  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
    <nav className="sticky top-0 bg-white border-b" style={{position: "fixed", zIndex: "999",top: "0",left: "0",width: "100%" }}>
      <div className="max-w-screen-xl mx-auto px-4 py-2 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="/Logo2.png"
              alt="Logo"
              className="h-10 w-10"
              style={{ width: "100px", height: "50px" }}
            />
          </Link>
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={handleMobileMenuClick}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {/* Desktop menu */}
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:underline"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:underline"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:underline"
              >
                Contact
              </Link>
              {user && (
                <>
                  <Link
                    to="/products"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:underline"
                  >
                    Products
                  </Link>
                  <Link
                    to="/Cart"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:underline"
                  >
                    Cart{" "}
                    <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                      {cartCount}
                    </span>
                  </Link>
                  <Link
                    to="/Admin"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:underline"
                  >
                    Admin
                  </Link>
                  <button
                    onClick={handleLogout}
                    aria-label="logout"
                  >
                    <a href="javascript:void(0)" className="block py-3 px-4 font-medium text-center text-white bg-red-600 hover:bg-red-500 active:bg-red-700 active:shadow-none rounded-lg shadow md:inline">
                      Logout
                    </a>
                  </button>
                </>
              )}
              {!user && (
                <>
                  <Link
                    to="/login"
                    className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                  >
                    <a href="javascript:void(0)" className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                      Sign Up
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className={`px-2 pt-2 pb-3  ${mobileMenuOpen ? 'block' : 'hidden'}`}>
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Contact
              </Link>
              {user && (
                <>
                  <Link
                    to="/products"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Products
                  </Link>
                  <Link
                    to="/Cart"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Cart{" "}
                    <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                      {cartCount}
                    </span>
                  </Link>
                  <Link
                    to="/Admin"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Admin
                  </Link>
                  <button
                    onClick={handleLogout}
                    aria-label="logout"
                  >
                    <a href="javascript:void(0)" className="block py-3 px-4 font-medium text-center text-white bg-red-600 hover:bg-red-500 active:bg-red-700 active:shadow-none rounded-lg shadow md:inline">
                      Logout
                    </a>
                  </button>
                </>
              )}
              {!user && (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                  >
                    <a href="javascript:void(0)" className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                      Sign Up
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
      <div className="mb-10"></div>
      </>
  );
};

export default Navbar;

