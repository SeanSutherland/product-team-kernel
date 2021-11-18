import React from 'react'
import { Outlet, useNavigate } from "react-router-dom"

import './Project.scss'

const Project = (props) => {
    let navigate = useNavigate();
    const { name, description, category, team_members } = props.project

    function handleClick() {
        navigate(`/${name}`)
    }

    return (
        <div className='project-container'>
            <h2 onClick={handleClick}>{name}</h2>
            <p>{category}</p>
            <p>{description}</p>
            <p>{team_members}</p>
            <Outlet />
        </div>
    );
}
export default Project;
