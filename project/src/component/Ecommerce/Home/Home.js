import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa6";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../Slice/CartSlice";

const Home = () => {
  const [prodData, setProdData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://65f420d2f54db27bc0208e7f.mockapi.io/productdata")
      .then((res) => setProdData(res.data));
  }, []);

  return (
    <div>
      {/* NAVBAR */}
      <nav className="h-[70px] bg-gray-50 w-full flex shadow-md">
        <div className="w-3/6 flex justify-evenly">
          {/* <img className="h-[50px] w-[50px] m-2" src="" /> */}
          <div className="w-1/3 flex justify-center items-center">
            <FaOpencart className="h-[50px] w-[50px] m-2" />
            <div className="p-5">ECOMMERCE</div>
          </div>
          <div className="bg-gray-300 rounded-full flex items-center pl-2 m-2 w-2/3">
            <IoMdSearch className="w-[25px] h-[25px] text-gray-500" />
            <input
              type="text"
              placeholder="Search For Gift"
              className="bg-gray-300 m-2 border-gray-200 w-full"
            />
          </div>
        </div>
        <div className="w-1/6"></div>
        <div className="w-2/6 flex my-auto justify-between">
          <div className="flex w-full">
            <img src="Coin.jpg" className="w-[30px] h-[30px]" />
            <div className="text-[25px] ml-2 text-yellow-700">10000</div>
            <div>
              <div className="text-[25px] ml-2 text-yellow-700">Coin</div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="bg-gray-700 ml-9 w-[30px] h-[30px] rounded-full flex justify-center items-center ">
              <FaUser className="text-white" />
            </div>
            <div className="ml-1">UserName</div>
          </div>
          <div className="w-full mr-5">
            <div className="flex float-end">
              <div className="bg-gray-300 w-[40px] h-[40px] rounded-full flex justify-center items-center z-10">
                <FaBagShopping />
              </div>
              <div className="flex justify-center items-center w-[18px] h-[18px] bg-red-600 rounded-full text-[15px] z-20">
                3
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* BODY */}
      <div className="m-4">
        <div className="bg-gray-200 rounded-sm">
          <button className="bg-sky-600 p-2 ml-3 my-2 rounded-sm text-[14px] text-white">
            We Found 10 Items
          </button>
        </div>

        {/* CARD */}

        <div className="mt-4 grid grid-cols-5 gap-4 max-md:grid-cols-4 max-sm:grid-cols-3 ">
          {prodData.map((item, i) => {
            return (
              <div key={i} className="w-[250px] h-[400px] bg-gray-100 p-2 shadow-lg rounded-md hover:bg-gray-300">
                <div className="h-3/5">
                  <img
                    src={item.image}
                    alt=""
                    className=" rounded-t-md h-full w-full"
                  />
                </div>
                <div className="h-2/5">
                  <div>
                    <div className="mt-3 ml-3">
                      <div className="text-blue-400">{item.title}</div>
                    </div>
                    <div className="mt-1 ml-3 text-gray-500">
                      {item.description}
                    </div>
                  </div>
                  <div className="flex items-center mt-3 ml-3">
                    <img src="Coin.jpg" className="w-[20px] h-[20px]" />
                    <div className="ml-1">{item.points}</div>
                  </div>
                  <div className="mt-4 flex justify-center items-center">
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="border border-gray-400 rounded-md w-full mx-2 p-1 text-blue-600 hover:bg-sky-800 hover:text-white"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
