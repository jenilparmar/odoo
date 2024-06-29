import React from 'react';

const Input = ({ placeholder, type,value ,onChange ,name}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className='bg-transparent border-2 border-green-600 focus:ring-green-600 rounded-md h-12 p-2 w-11/12 self-center'
    />
  );
};

export default Input;
