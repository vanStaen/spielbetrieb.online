import React from 'react';

import './Phone.less'

export const Phone = (props) => {
    const { color, content } = props;

    console.log(color)

    return (<div className="layout--copy-left">
        <div className='phone'>
            <div className='phone__main'>
                {content}
            </div>
            <div className='phone__button'></div>
        </div>
    </div>)

} 