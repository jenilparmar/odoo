import React from 'react'

export default function Input({placeholder, type}) {
  return (
    <>
   <input type={type} placeholder={placeholder} className='bg-transparent border-2 border-green-600 focus:ring-green-600 rounded-md h-12 p-2 w-11/12 self-center'/>
    
    </>
  )
}
