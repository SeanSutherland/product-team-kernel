import React from 'react'
import Dashboard from '../Dashboard/index.js'
import Block from '../Block/index.js'

const Dashboard2 = (props) => {
    const blocks = [
        <Block heading='Heading 1' content='block 1 content' width='48%' height='200px'/>,
        <Block heading='Heading 2' content='block 2 content' width='48%' height='200px'/>,
        <Block heading='Heading 3' content='block 3 content' width='98%' height='200px'/>,
    ]

    return (
        <div className='dashboard2'>
            <Dashboard projectName={props.projectName} blocks={blocks}/>
        </div>
    );
}
export default Dashboard2;
