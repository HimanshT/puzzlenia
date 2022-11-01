import React, { useState } from 'react'
import Img from '../images/login.png'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
//the sign in page and it links to singup form
const Signin = () => {
    //the below line initializes the values and updates accordingly in the page
    const [data, setData] = useState({ email: "", password: "" })
    const navigate = useNavigate();
    //the below fn's runs after submitting the form
    const handleSubmit = async (e) => {
        // e.preventDefault() is to prevent the form from making an http call. 
        //If we don't use that in a form submission, the page will refresh every time we submit a form.
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/loginUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: data.email, password: data.password })
        })
        const json = await response.json();
        console.log(json);
        console.log(json.success)
        localStorage.setItem('token', json.authtoken);
        navigate('/mainpage');
    }

    //the values that you will enter in form will be stored here
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <section>
            <div className='grid grid-cols-1 h-full sm:grid-cols-2 w-full'>
                <div className='sm:block'>
                    <img className='w-full  h-full object-cover' src={Img} alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                    <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8' style={{ backgroundColor: '#e9e798', color: '#242059' }}>
                        <h2 className='text-4xl font-bold text-center'>SIGN IN</h2>
                        <div className='flex flex-col py-2'>
                            <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                                <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
                                Sign in with Facebook
                            </button>
                            <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                Sign in with Google
                            </button>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Email</label>
                            <input onChange={onChange} value={data.email} name="email" className='rounded-lg mt-2 p-2 focus:border-blue-500  focus:outline-none' type="email" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Password</label>
                            <input onChange={onChange} value={data.password} name="password" className='p-2 rounded-lg  mt-2 focus:border-blue-500  focus:outline-none' type="password" />
                        </div>
                        <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Submit</button>
                        <Link to='/signup'>
                            <button href='/signup' className='w-full my-0 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign Up</button>
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Signin
