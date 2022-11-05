import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        <div>
            <h1 className='display-9'>{data.question}</h1>
            <button className="btn" type="submit" style={{ color: "red", }}>Submit</button>
            <Link to="/practice">
                <button className="btn" style={{ color: "blue", }}>Back</button>
            </Link>
        </div>
    )
}

export default SingleQuestion
