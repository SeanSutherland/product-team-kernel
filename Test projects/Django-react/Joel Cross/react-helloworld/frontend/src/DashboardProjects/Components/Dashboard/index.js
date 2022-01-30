import React from 'react'

import './index.scss'

const Dashboard = (props) => {
    const { projectName, blocks } = props

    return (
        <div className='dashboard'>
            <div><p className="dashboard__title">{projectName}</p></div>
            <div className='containers'>
                {blocks}
            </div>
        </div>
    );
}
export default Dashboard;
