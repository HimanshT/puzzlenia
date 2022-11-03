import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function Questionset() {
    const [data, setData] = useState([]);
    //function to get all the questions from database
    //We will useEffect so that our function runs only once when the page loads for exerciseset
    useEffect(() => {
        const getExercise = async () => {
            const response = await fetch("http://localhost:5000/api/question/getquestionset", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem('token')
                }
            });
            const json = await response.json();
            console.log(json);
            setData(json);
        }
        getExercise();
    }, []);
    return (
        <div className="container mx-auto m-8">
            {data.map((e) => (
                <div className="p-6 max-w-screen-2xl mb-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.question}</p>
                    <Link to="/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Solve
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Questionset



