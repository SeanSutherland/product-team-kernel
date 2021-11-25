import React from 'react'
import { Outlet, useNavigate } from "react-router-dom"

import placeholder from '../Images/logo_image.png';
import './Project.scss'

const Project = (props) => {
    let navigate = useNavigate();
    const { name, description, category, team_members } = props.project

    function handleClick() {
        navigate(`/${name}`)
    }

    return (
        <div className='project'>
            <div className="project__heading">
                <div><p className="project__title" onClick={handleClick}>{name}</p></div>
                <div><p className="project__category">{category}</p></div>
                <div><p className="project__team">{team_members}</p></div>
            </div>
            <span className="project__image-wrapper"><img className="project__image" src={placeholder} /></span>
            <p className="project__description">{description}</p>
            <Outlet />
        </div>
    );
}
export default Project;
