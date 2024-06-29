
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Crime from "./Components/Crime";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center overflow-x-hidden ">
        {/* <Login /> */}
       {/* <Signup /> */}
       {/* <Home/> */}
       <Crime/>
       <Navbar/>
      </div>
    </>
  );
}

export default App;
