import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import "../../stylesheets/singlequestion.css";

const SingleQuestion = () => {
    const [data, setData] = useState({});
    const { questionid } = useParams();
    useEffect(() => {
        const getQuestion = async () => {
            const response = await fetch(`http://localhost:5000/api/question/getquestionset/${questionid}`, {
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
        getQuestion();
    }, []);

    return (
        <div className='container'>
            <Navbar />
            <div className='container-md'>
                <div id="topdistance" className="row align-items-center justify-content-center">
                    <div className="col">
                        <p>{data.question}</p>
                    </div>
                    <div className="col">
                        <div class="input-group">
                            <span class="input-group-text">Answer</span>
                            <textarea class="form-control" aria-label="With textarea"></textarea>
                        </div>
                        <button className='btn btn-success mt-3'>Submit</button>
                    </div>
                </div>
                <Link to="/practice">
                    <button className='btn btn-dark mt-3'>Back to Question</button>
                </Link>
            </div>
        </div>
    )
}

export default SingleQuestion