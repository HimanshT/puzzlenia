import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";
function App() {
  return (
    <>
      <Mainpage />
    </>
  );
}

export default App;



// {/* <BrowserRouter>
//         <Navbar />
//         <div className="container">
//           <Routes>
//             <Route path='/' element={<Landing />}></Route>
//             <Route path='/signin' element={<Signin />}></Route>
//             <Route path='/signup' element={<Signup />}></Route>
//           </Routes>
//         </div>
//       </BrowserRouter> */}