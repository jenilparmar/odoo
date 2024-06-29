
import Home from "./Components/Home";

import Navbar from "./Components/Navbar";
import Crime from "./Components/Crime";
import StateContext from "./Components/myContext";
import { useState } from "react";
import Authenticated from "./Components/Authenticated";
import Map from "./Components/Map";

function App() {
  const [islogin , setIsLogin] = useState(false)
  const [signup , setSignup] = useState(false)
  const [crimeReport , setCrimeReport] = useState(false)
  const [homepage , setHomePage] = useState(false)
  return (  
    <>
    <StateContext.Provider value={{islogin, setHomePage,setIsLogin,signup ,crimeReport , setCrimeReport, setSignup}}>
      <div className="w-screen h-screen flex flex-col justify-center overflow-x-hidden ">
  
     {/* {!homepage  ?<Authenticated/>:undefined}
      {homepage ?<>
       {!crimeReport? <Home/>:<Crime/>}
        <Navbar/>
    </> :undefined
      } */}
      <Map/>
      </div>
      </StateContext.Provider>
    </>
  );
}

export default App;
