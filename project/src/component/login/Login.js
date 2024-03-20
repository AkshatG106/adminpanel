import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { HiUserAdd } from "react-icons/hi";

const Login = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [role, setRole] = useState("");
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   axios.get('https://65eaab35c9bf92ae3d3be3a5.mockapi.io/userData')
  //   .then((response) => setUser(response.data))
  // },[])

  useEffect(() => {
    axios.post('localhost:5003/login')
    .then((response) => setUser(response.data))
  },[])

  const proceedLogin = () => {
    if(role == ""){
      alert("Please select role!!")
    }
    else if (role == 'Admin') {
      if (userEmail === "admin@gmail.com" && userPass ==="123") {
        navigate("/dashboard");
      }else{
        alert("Please Enter Valid Credentials")
      }
    }
    else if(role == 'User'){
      for(let i=0;i<user.length;i++){
        if(user[i].email == userEmail && user[i].password == userPass ){
          navigate("/home")
        }else{
          alert("Please Enter Valid Credentials")
        }
      }
    }
     else {
      alert("Please Enter Valid Credentials");
    }
  };

  return (
    <div className="bg-slate-300">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-800 w-[500px] h-auto rounded-lg">
          <h1 className="text-5xl text-center mt-3 text-white">Login</h1>
          <FaUserCircle className=" text-[150px] mx-auto mt-[50px] text-white md:text-[100px]" />
          <form onSubmit={proceedLogin} className="p-11 p-auto">
            <label className="text-white">Email : </label>
            <input
              className="rounded-md p-1 float-end w-full my-3"
              type="email"
              placeholder=" Enter your Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <br />
            <br />
            <label className="text-white">Password : </label>
            <input
              type="password"
              placeholder=" Enter your Password"
              className="rounded-md p-1 float-end w-full my-3"
              value={userPass}
              onChange={(e) => setUserPass(e.target.value)}
            />
            <br />
            <br />
            <label className="text-white">Role : </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="rounded-md p-1 float-end w-full my-3"
            >
              <option>select</option>
              <option>Admin</option>
              <option>User</option>
            </select>
            <br />
            <br />
            <button
              type="submit"
              className="bg-blue-400 w-full text-white rounded-md p-2 mt-[30px] text-[20px]"
            >
              Login
            </button>
          </form>    
        </div>
      </div>
    </div>
  );
};

export default Login;
