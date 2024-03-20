import React, { useEffect, useState } from "react";
import Sidebar from "../dashboard/sidebar";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { updateProduct } from "./productSlice";

const UpdateProduct = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [image, setImage] = useState("");
  const [points, setPoints] = useState("");
  const [category, setCategory] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://65f420d2f54db27bc0208e7f.mockapi.io/productdata/${id}`)
      .then((response) => {
        const { category, title, description, image, points } = response.data;
        setTitle(title);
        setDes(description);
        setImage(image);
        setPoints(points);
        setCategory(category);
      });
  }, [id]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id,
      title,
      description: des,
      image,
      points,
      category,
    };
    dispatch(updateProduct(updatedProduct));
    navigate("/displayproducts");
  };

  return (
    <div>
      <div className="bg-slate-300 flex">
        <Sidebar />
        <div className="w-full">
          <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-800 w-[500px] h-[800px] rounded-lg">
              <h1 className="text-5xl text-center mt-3 text-white">
                Add Product
              </h1>
              <FaUserCircle className=" text-[150px] mx-auto mt-[50px] text-white" />
              <form onSubmit={HandleSubmit} className="p-11">
                <label className="text-white">Product Title : </label>
                <input
                  type="text"
                  className="rounded-md p-1 float-end w-full my-3"
                  placeholder=" Enter Product Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <br />
                <label className="text-white">Product Description : </label>
                <input
                  type="text"
                  className="rounded-md p-1 float-end w-full my-3"
                  placeholder=" Enter Product Description"
                  value={des}
                  onChange={(e) => setDes(e.target.value)}
                />
                <br />
                <br />
                <label className="text-white">Product Image Url : </label>
                <input
                  type="text"
                  className="rounded-md p-1 float-end w-full my-3"
                  placeholder=" Enter Image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <br />
                <br />
                <label className="text-white">Product Points : </label>
                <input
                  type="text"
                  className="rounded-md p-1 float-end w-full my-3"
                  placeholder=" Enter Product Points"
                  value={points}
                  onChange={(e) => setPoints(e.target.value)}
                />
                <br />
                <br />
                <label className="text-white">Product Category : </label>
                <input
                  type="text"
                  className="rounded-md p-1 float-end w-full my-3"
                  placeholder=" Enter Product Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <br />
                <br />
                <div className="flex w-full">
                  <button
                    type="submit"
                    className="bg-blue-400 w-1/2 text-white rounded-md p-2 mt-[30px] text-[20px]"
                  >
                    update Product
                  </button>
                  <Link to="/displayproducts" className="w-1/2 ">
                    <button className="bg-blue-400 w-full ml-2 text-white rounded-md p-2 mt-[30px] text-[20px]">
                      View List
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
