import React from "react";
import { Link } from "react-router-dom";
// import { CiLogout } from "react-icons/ci";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { GrLogout } from "react-icons/gr";

const Sidebar = () => {



  return (
    <div className="w-[220px] h-screen relative">
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-[220px] h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <button
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 text-white hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Users
                </span>
              </button>
              <ul id="dropdown-example" className="py-2 space-y-2">
                <li>
                  <Link
                    to="/addUser"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-white hover:bg-gray-700"
                  >
                    Add User
                  </Link>
                </li>
                <li>
                  <Link
                    to="/displayUser"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-white hover:bg-gray-700"
                  >
                    user List
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 text-white hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <PiShoppingBagOpenFill className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Products
                </span>
              </button>
              <ul id="dropdown-example" className="py-2 space-y-2">
                <li>
                  <Link
                    to="/addProduct"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-white hover:bg-gray-700"
                  >
                    Add product
                  </Link>
                </li>
                <li>
                  <Link
                    to="/displayproducts"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-white hover:bg-gray-700"
                  >
                    product List
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700 group"
              >
                <GrLogout className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"  />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {/* <div classNameName="w-[300px] bg-gradient-to-l from-sky-500 to-indigo-500 h-screen relative">
        <h1 classNameName="pt-4 pl-4 text-[30px]">Menu</h1>
        <div classNameName="mt-4 py-2 pl-8 text-[20px] mx-2 rounded-lg hover:bg-sky-300">
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        </div>

        <div classNameName="mt-4 py-2 pl-8 w-full">
          <select classNameName="bg-gradient-to-l from-sky-500 to-indigo-500 w-full">
            <option classNameName="bg-gradient-to-l from-sky-500 to-indigo-500">
              Users
            </option>
            <option classNameName="bg-gradient-to-l from-sky-500 to-indigo-500">
              <Link to="/addUser">
                <div classNameName="mt-4 py-2 pl-8 text-[20px] mx-2 rounded-lg hover:bg-sky-300">
                  <button classNameName="bg-gradient-to-l from-sky-500 to-indigo-500">
                    Add User
                  </button>
                </div>
              </Link>
            </option>
            <option classNameName="bg-gradient-to-l from-sky-500 to-indigo-500">
              <Link to="/displayUser">
                <div classNameName="mt-4 py-2 pl-8 text-[20px] mx-2 rounded-lg hover:bg-sky-300">
                  <button>User List</button>
                </div>
              </Link>
            </option>
          </select>
        </div>
        <Link to="/">
          <div classNameName="flex p-2 mb-2 pr-[180px] text-[20px] mx-2 rounded-lg hover:bg-sky-300 absolute bottom-0 left-0">
            <CiLogout classNameName="text-[20px] mr-2" />
            <button>Logout</button>
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Sidebar;
