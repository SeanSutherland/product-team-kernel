import React from 'react'

import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import './index.scss';
import headshot from './sample_image.jpeg';
import logo from './logo_image.png';

const Dashboard1 = (props) => {
    let projectName = "PROJECT-NAME-HERE"
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]


    return (
        <div className={`${projectName}`}>
            <div className={`${projectName}__header`}>
                <a href='/' className={`${projectName}__header-back`}>
                    <img className={`${projectName}__header-logo`} src={logo} />
                    <p>Back to projects</p>
                </a>
                <div className={`${projectName}__header-title`}><p>{props.projectName}</p></div>
            </div>

            {/* TEAM MEMBERS TAB */}
            <Accordion disableGutters>
                <AccordionSummary className={`${projectName}__accordion-heading`} expandIcon={<ExpandMoreIcon />}>
                    Team Members
                </AccordionSummary>
                <AccordionDetails>
                    <div className={`${projectName}__team-member`}>
                        <div className={`${projectName}__team-member-wrapper`}>
                            <img className={`${projectName}__team-member-headshot`} src={headshot} />
                            <p className={`${projectName}__team-member-name`}>Sample Name</p>
                            <p>3rd Year Computer Engineering</p>
                            <a href="https://www.linkedin.com">LinkedIn</a>
                        </div>
                        <div className={`${projectName}__team-member-wrapper`}>
                            <img className={`${projectName}__team-member-headshot`} src={headshot} />
                            <p className={`${projectName}__team-member-name`}>Sample Name</p>
                            <p>3rd Year Computing</p>
                            <a href="https://www.linkedin.com">LinkedIn</a>
                        </div>
                        <div className={`${projectName}__team-member-wrapper`}>
                            <img className={`${projectName}__team-member-headshot`} src={headshot} />
                            <p className={`${projectName}__team-member-name`}>Sample Name</p>
                            <p>4th Year Electrical Engineering</p>
                            <a href="https://www.linkedin.com">LinkedIn</a>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            {/* PROJECT DESCRIPTION TAB */}
            <Accordion disableGutters>
                <AccordionSummary className={`${projectName}__accordion-heading`} expandIcon={<ExpandMoreIcon />}>
                    Project Description
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>

            {/* DATA TAB */}
            <Accordion disableGutters>
                <AccordionSummary className={`${projectName}__accordion-heading`} expandIcon={<ExpandMoreIcon />}>
                    Our Data
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>

            {/* MODEL TAB */}
            <Accordion disableGutters>
                <AccordionSummary className={`${projectName}__accordion-heading`} expandIcon={<ExpandMoreIcon />}>
                    Our Model
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>

            {/* DEMO TAB */}
            <Accordion disableGutters>
                <AccordionSummary className={`${projectName}__accordion-heading`} expandIcon={<ExpandMoreIcon />}>
                    Demo
                </AccordionSummary>
                <AccordionDetails>
                    <div className='dashboard'>
                        <p>Check out the Recharts API <a href='https://recharts.org/en-US/examples'>here</a>.</p>
                        <LineChart width={730} height={250} data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </div>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
export default Dashboard1;
