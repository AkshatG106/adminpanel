import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Sidebar from "../dashboard/sidebar";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryPoints, setCategoryPoints] = useState();
  const [categoryData, setCategoryData] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://65eaab35c9bf92ae3d3be3a5.mockapi.io/category", {
      categoryName,
      categoryPoints,
    });
    setCategoryName("");
    setCategoryPoints(0);
  };

  const Fetch = () => {
    axios
      .get("https://65eaab35c9bf92ae3d3be3a5.mockapi.io/category")
      .then((info) => setCategoryData(info.data));
  };
  useEffect(() => {
    Fetch();
  }, []);
  // console.log(categoryData);

  const handleDelete = (id) => {
    axios
      .delete(`https://65eaab35c9bf92ae3d3be3a5.mockapi.io/category/${id}`)
      .then(() => {
        Fetch();
      });
  };

  const handleUpdate = (id) => {
    navigate(`/updateCategory/${id}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const nPage = Math.ceil(categoryData.length / recordsPerPage);
  const records = categoryData.slice(firstIndex, lastIndex);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div className="w-auto h-auto bg-slate-300 flex">
      <Sidebar />
      <div className="mx-auto pt-[10px]">
        <div className="flex justify-center items-center mx-auto rounded-lg">
          <div className="bg-gray-800 w-auto h-auto rounded-lg">
            <h1 className="text-5xl text-center mt-3 text-white md:text-3xl">
              Add Category
            </h1>
            <form onSubmit={handleSubmit} className="p-11">
              <label className="text-white">Category Name : </label>
              <input
                type="text"
                className="rounded-md p-1 float-end w-full my-3"
                placeholder="Enter Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
              <br />
              <br />
              <label className="text-white">Category Points : </label>
              <input
                type="text"
                className="rounded-md p-1 float-end w-full my-3"
                placeholder=" Enter Category Points"
                value={categoryPoints}
                onChange={(e) => setCategoryPoints(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-400 w-full text-white rounded-md p-2 mt-[30px] text-[20px]"
              >
                Add category
              </button>
            </form>
          </div>
        </div>
        <div className="mt-[10px]">
          <table className="text-center rounded-lg">
            <thead className="bg-gray-500 font-black">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs uppercase tracking-wider"
                >
                  category Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs uppercase tracking-wider"
                >
                  category Points
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs uppercase tracking-wider"
                >
                  Update
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs uppercase tracking-wider"
                >
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {records.map((info, i) => (
                <tr key={i} className="bg-gray-50">
                  <td className="px-3 py-2 whitespace-nowrap">
                    {info.categoryName}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {info.categoryPoints}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <button
                      onClick={() => handleUpdate(info.id)}
                      className="text-blue-600 hover:text-blue-900 flex justify-center"
                    >
                      <FaEdit className="text-[25px]" />
                    </button>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(info.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <MdDeleteForever className="text-[25px]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav className="flex justify-center items-center mt-2">
            <div className="border border-gray-300 bg-gray-50 p-2 rounded-l-lg ">
              <button onClick={prePage}>prev</button>
            </div>
            {numbers.map((n, i) => (
              <div className="border border-gray-300 bg-gray-50 p-2">
                <button key={i} onClick={() => changePage(n)}>
                  {n}
                </button>
              </div>
            ))}
            <div className="border border-gray-300 bg-gray-50 p-2 rounded-r-lg ">
              <button onClick={nextPage}>next</button>
            </div>
          </nav>
      </div>
    </div>
  );
};

export default AddCategory;
