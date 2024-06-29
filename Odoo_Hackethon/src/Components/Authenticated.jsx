import React, { useContext } from 'react'
import StateContext from './myContext'
import Login from './Login'
import Signup from './Signup'
import Crime from './Crime'

export default function Authenticated() {
    const { signup } = useContext(StateContext)

  return (
   <>
    {signup? <Signup/>:<Login/>}
   </>
  )
}
