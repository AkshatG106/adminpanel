import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../dashboard/sidebar";
// import { Link } from "react-router-dom";

const UpdateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryPoints, setCategoryPoints] = useState("");
  //   const [data, setData] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://65eaab35c9bf92ae3d3be3a5.mockapi.io/category/${id}`, {
        categoryName,
        categoryPoints,
      })
      .then(() => {
        navigate("/addCategory");
      });
    setCategoryName("");
    // setCategoryPoints("");
  };

  //   useEffect(() => {
  //     axios
  //       .get("https://65eaab35c9bf92ae3d3be3a5.mockapi.io/category")
  //       .then((info) => setData(info.data));
  //   }, []);
  // console.log(data);

  useEffect(() => {
    axios
      .get(`https://65eaab35c9bf92ae3d3be3a5.mockapi.io/category/${id}`)
      .then((response) => {
        const { categoryName, categoryPoints } = response.data;
        setCategoryName(categoryName);
        setCategoryPoints(categoryPoints);
      });
  });

  // const points = categoryPoints;
  // console.log(points);
  return (
    <div className="bg-slate-300 flex">
      <Sidebar />
      <div className="flex justify-center items-center mx-auto h-screen">
        <div className="bg-gray-800 w-[500px] h-auto rounded-lg">
          <h1 className="text-5xl text-center mt-3 text-white">
            Update Category
          </h1>
          <FaUserCircle className=" text-[150px] mx-auto mt-[50px] text-white" />
          <form onSubmit={handleUpdate} className="p-11">
            <label className="text-white">Category Name : </label>
            <input
              type="text"
              className="rounded-md p-1 float-end w-full my-3"
              placeholder=" Enter Category Name"
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
            <br />
            <br />
            <div className="flex w-full">
              <button
                type="submit"
                className="bg-blue-400 w-1/2 text-white rounded-md p-2 mt-[30px] text-[20px]"
              >
                Update
              </button>
              <Link to="/addCategory" className="w-1/2 ">
                <button className="bg-blue-400 w-full ml-2 text-white rounded-md p-2 mt-[30px] text-[20px]">
                  View List
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;
