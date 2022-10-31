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
        navigate('/');
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
