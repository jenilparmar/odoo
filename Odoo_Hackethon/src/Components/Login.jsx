import React from 'react'
import Input from "./Input";

export default function Login() {
  return (

    // <center className='min-h-screen flex items-center justify-center '>
        <div className=" shadow-md w-72 max-w-md md:max-w-sm lg:max-w-lg self-center h-auto md:h-96  bg-slate-300 border-2 border-black  flex flex-col justify-center gap-2 rounded-md p-6">
          <strong className='text-green-600 font-semibold text-3xl py-4 text-center'>Login</strong>
          <Input placeholder={"Email"} type={"email"} />
          <Input placeholder={"Password"} type={"password"} />
          <div className='self-end mx-5'>
            <p className='text-green-600 font-medium self-end cursor-pointer'>Forgot Password</p>
          </div>
          <button className='bg-green-600 active:bg-green-700 p-2 text-xl md:text-2xl h-12 w-full rounded-md font-semibold text-gray-800 my-2'>Login</button>
          <div className='self-center w-fit flex flex-row'>
            <p className='text-green-600 font-medium self-end'>New to this?</p>
            <p className='font-medium text-blue-500 mx-1 hover:text-blue-600 cursor-pointer'>Signin</p>
          </div>
        </div>
    //   </center>
  )
}
