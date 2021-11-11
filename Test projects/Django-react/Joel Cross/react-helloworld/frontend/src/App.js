import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Outlet, useNavigate } from "react-router-dom"
import './App.scss'

const App = () => {
    let navigate = useNavigate();
    const [people, setPeople] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/people/')
            .then(res => { setPeople(res.data) })
    }, []);

    const myPeople = Object.values(people)

    function handleClick() {
        navigate("/create");
    }

    return (
        <div className="page-container">
            <div>
                <h1>People</h1>
            </div>
            <div>
                {myPeople.length > 0 ?

                    <ul>
                        {myPeople.map((person) => {
                            return <li>{(person.first_name).concat(' ').concat(person.last_name).concat(', ').concat(person.age)}</li>
                        })}
                    </ul> : <p>None</p>

                }
            </div>
            <div>
                <button onClick={handleClick} >Create Person</button>
            </div>
            <Outlet />
        </div>
    );
}

export default App;
