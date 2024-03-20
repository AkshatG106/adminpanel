import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
// import { FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../dashboard/sidebar";
// import { Link } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [data, setData] = useState([]);
  const [categoryPoints, setCategoryPoints] = useState(0);
  const [error, seterror] = useState("")

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  //   axios
  //     .post("https://65eaab35c9bf92ae3d3be3a5.mockapi.io/userData", {
  //       name,
  //       email,
  //       password,
  //       category: Number(categoryPoints),
  //     })
  //     .then(() => {
  //       navigate("/displayUser");
  //     });
  //   setName("");
  //   setEmail("");
  //   setPassword("")
  //   setCategoryPoints("")
  // };
    axios
      .post("http://192.168.29.43:5003/register", {
        name,
        email,
        password,
        category: Number(categoryPoints),
      })
      .then((r) => {
        // console.log(r);
        navigate("/displayUser");
      }).catch((err) => {
        console.log(err.response.data.message);
        seterror(err.response.data.message)
      })
    setName("");
    setEmail("");
    setPassword("")
    setCategoryPoints("")
  };

  // console.log("xxxx",categoryPoints);

  useEffect(() => {
    axios
      .get("https://65eaab35c9bf92ae3d3be3a5.mockapi.io/category")
      .then((info) => setData(info.data));
  }, []);
  // console.log(data);

  return (
    <div className="bg-slate-300 flex">
      <Sidebar/>
      <div className="w-full">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-gray-800 w-[500px] h-auto rounded-lg">
            <h1 className="text-5xl text-center mt-3 text-white">Add User</h1>
            <FaUserCircle className="text-[150px] mx-auto mt-[50px] text-white md:text-[80px]" />
            <form onSubmit={handleSubmit} className="p-11">
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
              <label className="text-white">Password : </label>
              <input
                type="password"
                className="rounded-md p-1 float-end w-full my-3"
                placeholder=" Enter your UserName"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              <label className="text-white">Category : </label>
              <div className="flex w-full h-[50px]">
                <select
                  value={categoryPoints}
                  onChange={(e) => setCategoryPoints(e.target.value)}
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
                  Add User
                </button>
                <Link to="/displayUser" className="w-1/2 ">
                  <button className="bg-blue-400 w-full ml-2 text-white rounded-md p-2 mt-[30px] text-[20px]">
                    View List
                  </button>
                </Link>
              </div>
            </form>
            <label className="text-white">{error}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
