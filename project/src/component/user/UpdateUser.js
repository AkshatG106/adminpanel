import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
// import { FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../dashboard/sidebar";
// import { Link } from "react-router-dom";

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [categoryPre, setCategoryP] = useState("");
  const [data, setData] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .get(`https://65eaab35c9bf92ae3d3be3a5.mockapi.io/userData/${id}`)
      .then((res) => {
        const { category } = res.data;
        const previousPoints = Number(category);
        const updatedPoints = Number(categoryPre);
        const totalPoints = previousPoints + updatedPoints;
        axios
          .put(`https://65eaab35c9bf92ae3d3be3a5.mockapi.io/userData/${id}`, {
            name,
            email,
            category: totalPoints,
          })
          .then(() => {
            navigate("/displayUser");
          });
      });
    // .catch((error) => console.error("Error fetching user data: ", error));

    setName("");
    setEmail("");
  };

  useEffect(() => {
    axios
      .get("https://65eaab35c9bf92ae3d3be3a5.mockapi.io/category")
      .then((info) => setData(info.data));
  }, []);

  useEffect(() => {
    axios
      .get(`https://65eaab35c9bf92ae3d3be3a5.mockapi.io/userData/${id}`)
      .then((response) => {
        const { name, email, category } = response.data;
        setName(name);
        setEmail(email);
        setCategoryP(category);
      });
  }, [id]);

  return (
    <div className="bg-slate-300 flex">
      <Sidebar />
      <div className="flex justify-center items-center mx-auto h-screen">
        <div className="bg-gray-800 w-[500px] h-auto rounded-lg">
          <h1 className="text-5xl text-center mt-3 text-white">Update User</h1>
          <FaUserCircle className=" text-[150px] mx-auto mt-[50px] text-white" />
          <form onSubmit={handleUpdate} className="p-11">
            <label className="text-white">UserName : </label>
            <input
              type="text"
              className="rounded-md p-1 float-end w-full my-3"
              placeholder=" Enter your UserName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <label className="text-white">Email : </label>
            <input
              type="email"
              className="rounded-md p-1 float-end w-full my-3"
              placeholder=" Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label className="text-white">Category : </label>
            <div className="flex w-full h-[50px]">
              <select
                value={categoryPre}
                onChange={(e) => setCategoryP(e.target.value)}
                className="rounded-md my-3 w-5/6 h-[40px]"
              >
                <option>select</option>
                {data.map((info, i) => (
                  <option key={i} value={info.categoryPoints}>
                    {info.categoryName}({info.categoryPoints})
                  </option>
                ))}
              </select>
              <div className="w-1/6">
                <Link to="/addCategory">
                  <button className="bg-blue-400 text-white rounded-md float-end h-[40px] w-[40px] my-3 ml-4 text-[20px] flex justify-center items-center">
                    <IoMdAddCircle />
                  </button>
                </Link>
              </div>
            </div>
            <br />
            <br />
            <div className="flex w-full">
              <button
                type="submit"
                className="bg-blue-400 w-1/2 text-white rounded-md p-2 mt-[30px] text-[20px]"
              >
                Update User
              </button>
              <Link to="/displayUser" className="w-1/2 ">
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

export default UpdateUser;
