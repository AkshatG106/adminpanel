import React, { useEffect, useState } from "react";
import Sidebar from "../dashboard/sidebar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteProduct, fetchApi } from "./productSlice";
import { TiDeleteOutline } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const DisplayProducts = () => {
  const [productData, setProductData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("https://65f420d2f54db27bc0208e7f.mockapi.io/productdata")
      .then((res) => setProductData(res.data));
  };

  useEffect(() => {
    getData();
  }, [dispatch]);

  // console.log("from display",productData);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
      setProductData(productData.filter((item) => item.id !== id));
    }
  };

  const handleUpdate = (id) => {
    navigate(`/updateproduct/${id}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const npage = Math.ceil(productData.length / recordsPerPage);
  const records = productData.slice(firstIndex, lastIndex);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div className="bg-slate-100">
      <div className="flex">
        <Sidebar />
        <div className="ml-[50px] w-full">
          <div>
            <h1 className="text-[50px]">Products</h1>
          </div>
          <hr className="" />
          <div className="grid grid-cols-4 gap-4 md:grid-cols-3">
            {records.map((product, i) => {
              return (
                <div key={i} className="m-3">
                  <div className="flex items-center p-2 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 bg-white relative text-black">
                    <img
                      className="object-cover h-40 w-36 rounded-t-lg md:rounded-none md:rounded-l-lg"
                      src={product.image}
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {product.title}
                      </h5>
                      <p className="mb-3 font-normal text-gray-600">
                        {product.description}
                      </p>
                      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {product.points}
                      </h1>
                    </div>
                    <div className="absolute top-0 right-0 m-4">
                      <div className="flex md:flex-col">
                        <div
                          onClick={() => handleUpdate(product.id)}
                          className="bg-green-700 rounded-md flex justify-center items-center"
                        >
                          <button className="p-2">
                            <AiFillEdit className="w-[15px] h-[15px]"/>
                          </button>
                        </div>
                        <div
                          onClick={() => handleDelete(product.id)}
                          className="bg-red-700 rounded-md flex justify-center md:mt-2 items-center"
                        >
                          <button className="p-2">
                            <TiDeleteOutline className="w-[15px] h-[15px]"/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex">
        <nav className="flex mx-auto mt-2">
          <div
            onClick={prePage}
            className="border border-gray-300 bg-gray-50 p-2 rounded-l-lg "
          >
            <button>prev</button>
          </div>
          {numbers.map((n, i) => (
            <div
              onClick={() => changePage(n)}
              className="border border-gray-300 bg-gray-50 p-2"
            >
              <button key={i}>{n}</button>
            </div>
          ))}
          <div
            onClick={nextPage}
            className="border border-gray-300 bg-gray-50 p-2 rounded-r-lg "
          >
            <button>next</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DisplayProducts;
