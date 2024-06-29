import React from 'react'
import Input from "./Input";

export default function Signup() {
  return (
  <>
   <div className='w-screen h-fit flex flex-col'>
      <div className="shadow-md w-80  bg-slate-300 border-2 border-black   rounded-md self-center flex-col flex gap-4 p-4">
        <div className='text-center text-3xl p-2 font-semibold text-green-600'>Signup</div>
        <Input type={"text"} placeholder={"Name"} />
        <Input type={"number"} placeholder={"Age"} />

        <div className='flex flow-row self-center justify-around gap-3 w-10/12 '>
        <div className='flex flex-col  '>
         
          <select className='p-2 rounded-md bg-slate-200  border-2 border-green-600 '>
            <option value="" disabled selected>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className='flex flex-col  '>
          
          <select className='p-2 rounded-md w-28 bg-slate-200 border-2 border-green-600 '>
            <option value="" disabled selected>Role</option>
            <option value="doctor">Citizen</option>
            <option value="medicalStudent">Policeman</option>
            <option value="pharmasist">Admin</option>

          </select>
        </div>
        </div>

        <Input type={"email"} placeholder={"Email"} />
        <Input type={"password"} placeholder={"Password"} />
        <button className='bg-green-600 p-2 text-xl active:bg-green-700 md:text-2xl h-12 self-center w-11/12 rounded-md font-semibold text-gray-800 my-1'>Signup</button>
        <p className='flex flex-row self-center text-green-600'>
          Already have an account?
          <span className='text-blue-500 mx-1 hover:text-blue-600 cursor-pointer'>Login</span>
        </p>
      </div>
    </div>
  </>
  )
}
