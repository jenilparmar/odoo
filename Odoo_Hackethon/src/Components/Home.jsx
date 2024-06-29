import React, { useContext } from "react";
import StateContext from "./myContext";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export default function Home() {
const {setWindow} = useContext(StateContext)
gsap.registerPlugin(useGSAP);
useGSAP(()=>{
  const tl = gsap.timeline();
  gsap.to(".Name",{
    width:'45vw',
    duration:1,
    stagger:1

  })
  tl.to(".Name2",{
    width:'28vw',
    duration:1,
    stagger:1

  })
  gsap.from(".list li",{
    opacity:0,
    duration:0.5,
    y:5,
    stagger:0.5
  })
  gsap.to(".photo",{
    boxShadow:"2px 2px 10px black",
    scale:1.1,
    duration:1,
    stagger:1

  })
})
  return (

    <>
      <div className="w-11/12 h-fit  flex flex-col self-center ">
        <p className=" text-8xl font-bold text-green-600 self-center relative  ">
          Welcome Jenil
        </p>
        <div className="Name w-1 h-1 rounded-lg bg-black self-center"></div>
        <p className=" self-center p-2 text-2xl text-green-700 font-medium relative ">
          Together, we can build a safer neighborhood
        </p>

        <p className="self-start text-red-700 mx-20 -my-4 text-2xl font-semibold relative top-12">
          Message from the Police Department :-
        </p>
        <div className="Name2 w-0 h-1 relative top-20 -my-2 left-20 s rounded-lg bg-black self-start"></div>

        <div className="flex flex-row justify-center gap-3 relative top-20">
          <div className="w-7/12 h-72 p-3">
            <p className="text-xl font-medium">
              If you see any crime happening, we've made it super easy for you
              to report it. Just fill out our simple crime form with the
              following details:
            </p>
            <ul className="list list-disc">
                <li>Location: Where did it happen?</li>
                <li>Date and Time: When did it happen?</li>
                <li>Type of Crime: What kind of crime was it?</li>
                <li>Description: Provide a brief description of the incident.</li>
                <li>Photos(if possible): Upload any media to help us understand better.</li>
            </ul>
          </div>
          <div className="photo w-3/12 p-2 h-72 border-2 border-black" style={
            {
            backgroundImage:"url(https://images.mid-day.com/images/images/2023/jul/Trombay-a_d.jpg)",
            backgroundSize:"cover",
            backgroundPosition:"center"
            }
          }></div>
        </div>
        <div className="w-full h-48  relative top-28 flex p-2 flex-col justify-start">
            <button className="p-3  text-xl w-fit  self-center rounded-xl font-semibold bg-green-600 shadow-md hover:bg-green-700 transition-colors duration-150 " onClick={()=>{
              setWindow("Crime")
            }}>Report Crime</button>
        </div>

      </div>
    </>
  );
}
