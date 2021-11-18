import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Outlet } from "react-router-dom"
import './App.scss'
import Project from './Components/Project.js'

const App = () => {
    const [projectData, setProjectData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/projects/')
            .then(res => { setProjectData(res.data) })
    }, []);

    return (
        <div className="page-container">
            <div>
                <h1>Projects</h1>
            </div>
            <div className='page-container__projects'>
                {projectData.length > 0 ?
                    projectData.map((project) => {
                        return <Project project={project} />
                    })
                    : <p>None</p>

                }
            </div>
            <Outlet />
        </div>
    );
}

export default App;
