import { useState } from 'react';
import UserContext from './userContext';

const UserState = (props) => {
    const host = "http://localhost:5000"
    const [solvedQuestions, setSolvedQuestions] = useState([]);
    const [user, setFinduser] = useState({});
    //Get the array of solved question id's of the user
    const getSolvedQuestions = async () => {
        const response = await fetch(`${host}/api/user/solvedquestion`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        console.log(json);
        setSolvedQuestions(json);
    }

    //update the array with the id of the solve equation
    const addSolvedQuestion = async (questionid) => {
        const response = await fetch(`${host}/api/user/addsolvedquestion`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ questionid })
        });
        const json = await response.json();
        console.log(json);
        setSolvedQuestions(json);
    }

    //find the user data by its username
    const finduser = async (username) => {
        const response = await fetch(`${host}/api/user/finduser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ username })
        });
        const json = await response.json();
        setFinduser(json);
    }

    //follow route user1(logged in person) follows user2(found person)
    const follow = async (username) => {
        const response = await fetch(`${host}/api/user/follow`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ username })
        });
        const json = await response.json();
        console.log(json);
        // setFinduser(json);
    }

    return (
        <UserContext.Provider value={{ solvedQuestions, getSolvedQuestions, addSolvedQuestion, user, finduser, follow }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
