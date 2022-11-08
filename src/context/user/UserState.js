import { useState } from 'react';
import UserContext from './userContext';

const UserState = (props) => {
    const host = "http://localhost:5000"
    const [data, setData] = useState([]);

    //Get the array of solved question id's of the user
    const getSolvedQuestions = async () => {
        const response = await fetch(`${host}/api/user/solvedquestio`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        console.log(json);
        setData(json);
    }

    return (
        <UserContext.Provider value={{ getSolvedQuestions }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
