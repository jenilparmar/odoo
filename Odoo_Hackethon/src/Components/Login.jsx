import React, { useContext, useState } from "react";
import Input from "./Input";
import axios from "axios";
import StateContext from "./myContext";

export default function Login() {
  const { setIsLogin, setSignup, setHomePage, setWindow } = useContext(StateContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "http://localhost:8000/CheckValidUser",
      method: "POST",
      data: formData,
    })
      .then((res) => {
        if (!res.data) {
          alert("Please check Email and password");
        }
        setIsLogin(true);
        setHomePage(res.data);
        if (res.data) setWindow("Home");

        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="shadow-md w-72 max-w-md md:max-w-sm lg:max-w-lg self-center h-auto md:h-96 bg-slate-300 border-2 border-black flex flex-col justify-center gap-4 rounded-md p-6">
      <strong className="text-green-600 font-semibold text-3xl text-center">
        Login
      </strong>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className="flex justify-end">
          <p className="text-green-600 font-medium cursor-pointer">
            Forgot Password
          </p>
        </div>
        <button className="bg-green-600 active:bg-green-700 text-xl md:text-2xl h-12 rounded-md font-semibold text-gray-800">
          Login
        </button>
      </form>
      <div className="flex items-center justify-center mt-4">
        <p className="text-green-600 font-medium">New to this?</p>
        <p
          className="font-medium text-blue-500 ml-1 cursor-pointer hover:text-blue-600"
          onClick={() => {
            setSignup(true);
          }}
        >
          Sign up
        </p>
      </div>
    </div>
  );
}
