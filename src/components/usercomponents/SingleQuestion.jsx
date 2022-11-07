import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import "../../stylesheets/singlequestion.css";
import { toast } from 'react-toastify';


const SingleQuestion = () => {
    const [data, setData] = useState({});
    const [response, setResponse] = useState({ ans: "" });
    const { questionid } = useParams();
    const answer = data.answer;
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("checking ans");
        if (answer === response.ans) {
            toast("correct Answer");
        } else {
            toast("Wrong Answer");
        }
    }
    //set the current value of ans
    const onChange = (e) => {
        setResponse({ ...response, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            <Navbar />
            <div className='container-md'>
                <div id="topdistance" className="row align-items-center justify-content-center">
                    <div className="col">
                        <p>{data.question}</p>
                    </div>
                    <div className='col'>
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="response">Answer</label>
                                <input onChange={onChange} value={response.ans} name="ans" type="text" class="form-control" id="response" />
                            </div>
                            <button type="submit" className='btn btn-success mt-3'>Submit</button>
                        </form>
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