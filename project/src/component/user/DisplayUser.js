import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Sidebar from "../dashboard/sidebar";

const DisplayUser = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
  //   axios
  //     .get("https://65eaab35c9bf92ae3d3be3a5.mockapi.io/userData")
  //     .then((info) => setData(info.data));
  // };
    axios
      .get("http://192.168.29.43:5003/")
      .then((info) => setData(info.data));
  };

  // useEffect(() => {
  //   axios
  //     .get("https://65eaab35c9bf92ae3d3be3a5.mockapi.io/category")
  //     .then((info) => setCategory(info.data));
  // }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://192.168.29.43:5003/deleteemp/${id}`)
      .then(() => {
        fetch();
      });
  };

  const handleUpdate = (id) => {
    navigate(`/updateUser/${id}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const nPage = Math.ceil(data.length / recordsPerPage);
  const records = data.slice(firstIndex, lastIndex);
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

  //   console.log(data);
  return (
    <div className="w-full h-screen bg-slate-300 flex">
      <Sidebar />
      <div className="flex flex-col mt-16 overflow-x-auto mx-auto rounded-lg">
        <table className=" divide-y divide-gray-200 text-center">
          <thead className="bg-gray-500 font-black">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-xs uppercase tracking-wider"
              >
                User Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs uppercase tracking-wider"
              >
                Password
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs uppercase tracking-wider"
              >
                Points
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
          <tbody className="divide-y divide-gray-200 rounded-lg">
            {records.map((info, i) => {
              return (
                <tr
                  key={i}
                  className="bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{info.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{info.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{info.password}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {info.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleUpdate(info.id)}
                      className="text-blue-600 hover:text-blue-900 flex justify-center"
                    >
                      <FaEdit className="text-[25px]" />
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(info._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <MdDeleteForever className="text-[25px]" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <nav className="flex mx-auto mt-2">
          <div className="border border-gray-300 bg-gray-50 p-2 rounded-l-lg ">
            <button onClick={prePage}>prev</button>
          </div>
          {numbers.map((n, i) => (
            <div key={i} className="border border-gray-300 bg-gray-50 p-2">
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

export default DisplayUser;
