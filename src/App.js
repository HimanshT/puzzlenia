import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Practice from "./components/usercomponents/Practice";
function App() {
  return (
    <>
      {<BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/signin' element={<Signin />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/practice' element={<Practice />}></Route>
          </Routes>
        </div>
      </BrowserRouter>}
    </>
  );
}

export default App;



