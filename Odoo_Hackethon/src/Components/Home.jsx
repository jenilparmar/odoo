import React, { useContext } from "react";
import StateContext from "./myContext";

export default function Home() {

  return (
    <>
      <div className="w-11/12 h-fit  flex flex-col self-center ">
        <p className="text-8xl font-bold text-green-600 self-center relative  ">
          Welcome Jenil
        </p>
        <p className="self-center p-2 text-2xl text-green-700 font-medium relative ">
          Together, we can build a safer neighborhood
        </p>
        <p className="self-start mx-20 -my-4 text-2xl font-semibold relative top-12">
          Message from the Police Department
        </p>
        <div className="flex flex-row justify-center gap-3 relative top-20">
          <div className="w-7/12 h-72 p-3">
            <p className="text-xl font-medium">
              If you see any crime happening, we've made it super easy for you
              to report it. Just fill out our simple crime form with the
              following details:
            </p>
            <ul className="list-disc">
                <li>Location: Where did it happen?</li>
                <li>Date and Time: When did it happen?</li>
                <li>Type of Crime: What kind of crime was it?</li>
                <li>Description: Provide a brief description of the incident.</li>
                <li>Photos(if possible): Upload any media to help us understand better.</li>
            </ul>
          </div>
          <div className="w-3/12 p-2 h-72 " style={
            {
            backgroundImage:"url(https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2022%2F08%2F23%2Fsanjay-arora-pti-1138419-1661198095.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop)",
            backgroundSize:"cover",
            backgroundPosition:"center"
            }
          }></div>
        </div>
        <div className="w-full h-48  relative top-28 flex p-2 flex-col justify-start">
            <button className="p-3  text-xl w-fit  self-center rounded-xl font-semibold bg-green-600 shadow-md hover:bg-green-700 transition-colors duration-150 ">Report Crime</button>
        </div>

      </div>
    </>
  );
}
