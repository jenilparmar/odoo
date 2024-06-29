import React,{useContext} from "react";
import StateContext from './myContext'
export default function Navbar() {
  const {setCrimeReport , setWindow} = useContext(StateContext)
  const name = localStorage.getItem("Admin")
  const name2 = localStorage.getItem("Policeman")
  return (
    <div className=" z-10 fixed bottom-2 w-10/12 h-20 rounded-lg bg-slate-400 self-center my-2 flex flex-row justify-around ">
      <div className="text-center self-center">
        <i class="fa-solid fa-house" onClick={()=>{
          setWindow("Home")
        }}></i>
        <br />
        Home
      </div>

      <div className="text-center self-center">
        <i class="fa-solid fa-handcuffs" onClick={()=>{
          setWindow("Crime")
        }}></i>
        <br />
        Crime Report
      </div>
      {name||name2?<div className="text-center self-center">
        <i class="fa-solid fa-map-location-dot" onClick={()=>{
          setWindow("Map")
        }}></i>
        <br />
        Map View
      </div>:undefined}
    </div>
  );
}
