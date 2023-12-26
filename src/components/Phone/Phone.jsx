import React from 'react';

import './Phone.less'

export const Phone = (props) => {
    const { color, content } = props;

    console.log(color)

    return (<div className="layout--copy-left">
        <div className='pca-hold circle-animation'>
            <div className='pca-main'>
                <div className='pca-inner'>
                    <div className="circle">
                        {content}
                    </div>
                </div>
            </div>
            <div className='pca-sub'>
                <div className='pca-top'>
                </div> <div className='pca-mid'>
                    <div className='pca-part'></div>
                </div> <div className='pca-bot'></div>
            </div>
        </div>
    </div>)

} 