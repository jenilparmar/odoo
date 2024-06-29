import React, { useState } from 'react';
import Input from "./Input";
import axios from 'axios'
export default function Signup() {

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    role: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(formData); 
    axios({
      url:"http://localhost:8000/UserData",
      method:"POST",
      data:formData
    })
    .then(res=>{
      console.log(res.data);
      alert("Submiteeed")
    })
    .catch(e=>{
      console.log(e);
    })
  };

  return (
    <>
      <div className='w-screen h-fit flex flex-col'>
        <div className="shadow-md w-80 bg-slate-300 border-2 border-black rounded-md self-center flex-col flex gap-4 p-4">
          <div className='text-center text-3xl p-2 font-semibold text-green-600'>Signup</div>
          <Input
            type={"text"}
            name={"name"}
            placeholder={"Name"}
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input
            type={"number"}
            name={"age"}
            placeholder={"Age"}
            value={formData.age}
            onChange={handleInputChange}
          />

          <div className='flex flow-row self-center justify-around gap-3 w-10/12 '>
            <div className='flex flex-col  '>
              <select
                className='p-2 rounded-md bg-slate-200 border-2 border-green-600'
                name={"gender"}
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className='flex flex-col  '>
              <select
                className='p-2 rounded-md w-28 bg-slate-200 border-2 border-green-600'
                name={"role"}
                value={formData.role}
                onChange={handleInputChange}
              >
                <option value="" disabled>Select Role</option>
                <option value="citizen">Citizen</option>
                <option value="policeman">Policeman</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          </div>

          <Input
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            value={formData.password}
            onChange={handleInputChange}
          />

          <button
            className='bg-green-600 p-2 text-xl active:bg-green-700 md:text-2xl h-12 self-center w-11/12 rounded-md font-semibold text-gray-800 my-1'
            onClick={handleSubmit}
          >
            Signup
          </button>
          <p className='flex flex-row self-center text-green-600'>
            Already have an account?
            <span className='text-blue-500 mx-1 hover:text-blue-600 cursor-pointer'>Login</span>
          </p>
        </div>
      </div>
    </>
  );
}
