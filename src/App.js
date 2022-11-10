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
import FindUser from "./components/usercomponents/FindUser";
import Error from "./components/Error/Error";
import Dashboard from "./components/usercomponents/DashboardComponents/Dashboard";

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
              <Route path='/finduser' element={<FindUser />}></Route>
              <Route path='/dashboard' element={<Dashboard />}></Route>
              <Route path='*' element={<Error />}></Route>
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



