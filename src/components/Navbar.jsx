import React from 'react'
import logo from '../images/logo.jpg';
import { Link } from "react-router-dom";

const Navbar = () => {
    const isloggedin = false;
    return (
        <>
            <nav className="navbar bg-light fixed-top">
                <div id="navid" className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        PUZZLENIA
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Puzzlenia</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/practice" className="nav-link" href="#">Practice</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contest" className="nav-link" href="#">contest</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/finduser" className="nav-link" href="#">Find User</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link" href="#">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" href="#"><button className='btn btn-danger'>{isloggedin ? 'Logout' : 'Login'}</button></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar


// {/* <nav className="bg-white border-gray-200 px-8 sm:px-4 py-2.5 rounded dark:bg-gray-900">
// <div className="container flex flex-wrap justify-between items-center mx-auto">
//     <Link to="/" className="flex items-center">
//         <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
//         <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" style={{ color: "#00acf1" }}>Puzzlenia</span>
//     </Link>
//     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//         <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//                 <Link to="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
//             </li>
//             <li>
//                 <Link to="/practice" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Practice</Link>
//             </li>
//             <li>
//                 <Link to="createContest" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Create Contest</Link>
//             </li>
//             <li>
//                 <Link to="findUser" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Find User</Link>
//             </li>
//             <li>
//                 <Link to="Dashboard" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</Link>
//             </li>
//             <li>
//                 <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{isSignup ? 'Signup' : 'Sign In'}</Link>
//             </li>
//         </ul>
//     </div>
// </div>

// </nav> */}