import React, { useContext, useState } from "react";
import Input from "./Input";
import axios from "axios";
import StateContext from "./myContext";

export default function Login() {
  const { setIsLogin , setSignup, setHomePage, setWindow} = useContext(StateContext);
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
    // console.log(formData);
    axios({
      url: "http://localhost:8000/CheckValidUser",
      method: "POST",
      data: formData,
    })
      .then((res) => {
        {
          !res.data ? alert("Please check Email and password") : undefined;
        }
        setIsLogin(true);
        setHomePage(res.data)
        if(res.data) setWindow("Home")

        console.log(res);
        
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="shadow-md w-72 max-w-md md:max-w-sm lg:max-w-lg self-center h-auto md:h-96 bg-slate-300 border-2 border-black flex flex-col justify-center gap-2 rounded-md p-6">
      <strong className="text-green-600 font-semibold text-3xl py-4 text-center">
        Login
      </strong>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          placeholder={"Email"}
          type={"email"}
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          name="password"
          placeholder={"Password"}
          type={"password"}
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className="self-end mx-5">
          <p className="text-green-600 font-medium self-end cursor-pointer">
            Forgot Password
          </p>
        </div>
        <button className="bg-green-600 active:bg-green-700 p-2 text-xl md:text-2xl h-12 w-full rounded-md font-semibold text-gray-800 my-2">
          Login
        </button>
      </form>
      <div className="self-center w-fit flex flex-row">
        <p className="text-green-600 font-medium self-end">New to this?</p>
        <p className="font-medium text-blue-500 mx-1 hover:text-blue-600 cursor-pointer" onClick={()=>{
          setSignup(true)
        }}>
          Signin
        </p>
      </div>
    </div>
  );
}
