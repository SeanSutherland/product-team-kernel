import React, { useState } from 'react'
import axios from 'axios'
import { Outlet, useNavigate } from "react-router-dom"

import './index.scss'

const CreatePerson = () => {
    let navigate = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState(null)

    function handleSubmit() {
        const person = {
            first_name: firstName,
            last_name: lastName,
            age: age
        }

        axios
            .post('http://localhost:8000/people/', person)
            .then(navigate("/"))
            .then(console.log("Person made!"))
    }

    return (
        <div className='create-form'>
            <h1>Create a person</h1>
            <div className='create-form__field'>
                <p>First name</p>
                <input type="text" name="first name" onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className='create-form__field'>
                <p>Last name</p>
                <input type="text" name="last name" onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className='create-form__field'>
                <p>Age</p>
                <input type="text" name="age" onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
                <button onClick={handleSubmit} >Create</button>
            </div>
            <Outlet />
        </div>
    );
}
export default CreatePerson;
