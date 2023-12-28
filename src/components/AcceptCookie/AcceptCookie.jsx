import React, { useEffect } from "react";
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import './AcceptCookie.less';

export const AcceptCookie = () => {
    const windowInnerWidth = window.innerWidth;

    useEffect(() => {
        const elementCookieContainer = document.getElementById('cookiecontainer');
        console.log('elementCookieContainer', elementCookieContainer)
        setTimeout(() => {
            if (windowInnerWidth > 675) {
                elementCookieContainer.style.bottom = '0px';
            } else {
                elementCookieContainer.style.top = '0px';
            }
        }, "1000");
    }, [])

    const handleCloseClick = (value) => {
        const elementCookieContainer = document.getElementById('cookiecontainer');
        if (windowInnerWidth > 675) {
            elementCookieContainer.style.right = '-500px';
        } else {
            elementCookieContainer.style.top = '-200px';
        }
    }

    return (
        <>
            <div className="cookie__container" id="cookiecontainer">
                <div className="cookie__title">
                    This website uses cookies.
                </div>
                <div className="cookie__body">
                    We use cookies to analyze website traffic and optimize your website experience.
                    By accepting our use of cookies, your data will be aggregated with all other user data.
                </div>
                <Button className="cookie__button" onClick={() => handleCloseClick(true)}>Accept</Button>
                <CloseOutlined className="cookie__closebutton" onClick={() => handleCloseClick(false)} />
            </div>
        </>
    )
} 