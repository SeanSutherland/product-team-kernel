import React from "react";
import './index.scss'

const Block = (props) => {
    const { heading, content, width, height } = props

    return (
        <div className='block' style={{ width: width, height: height }}>
            <div><p className="block__heading">{heading}</p></div>
            <div className='block__content'>
                {content}
            </div>
        </div>
    );
}
export default Block;
