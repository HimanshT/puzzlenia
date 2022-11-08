import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Practice from "./components/usercomponents/Practice";
import SingleQuestion from "./components/usercomponents/SingleQuestion";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UserState from './context/user/UserState';

function App() {
  return (
    <>
      <UserState>
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path='/' element={<Landing />}></Route>
              <Route path='/signin' element={<Signin />}></Route>
              <Route path='/signup' element={<Signup />}></Route>
              <Route path='/practice' element={<Practice />}></Route>
              <Route path='/practice/:questionid' element={<SingleQuestion />}></Route>
            </Routes>
          </div>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </UserState>
    </>
  );
}

export default App;



