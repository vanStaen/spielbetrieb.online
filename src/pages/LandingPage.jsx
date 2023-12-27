import React, { useEffect } from 'react';
import { Tooltip } from 'antd';
import { useTranslation } from "react-i18next";
import { NotificationOutlined, MailOutlined, LinkOutlined } from '@ant-design/icons';

import SpielbetriebLogo from "../img/logos/spielbetriebLogo.png";
import { Phone } from '../components/Phone/Phone';

import './LandingPage.less';
import './Merrier.less';

export const LandingPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        const elementPhone = document.getElementById('phone');
        const elementSpielbetrieb = document.getElementById('spielbetrieb');
        const windowInnerWidth = window.innerWidth;
        if (windowInnerWidth > 675) {
            setTimeout(() => {
                elementPhone.style.transform = 'translate3d(-33vw, -3%, 0)';
                elementSpielbetrieb.style.transform = 'translate3d(-15vw, 0%, 0)';
            }, "500");
        }
    }, []);

    return (
        <>
            <div className='background' id='background'></div>
            <div className="landingPage__container">
                <div className='spielbetrieb__container' id='spielbetriebcontainer'>
                    <div className='spielbetrieb__logoAndText' id='spielbetrieb'>
                        <img src={SpielbetriebLogo} id="spielbetriebLogo" className='spielbetrieb__logo' />
                        <div className="spielbetrieb__text">Spielbetrieb </div>
                        <div className="spielbetrieb__subtext">{t('general.commingsoon')} </div>
                        <div className='spielbetrieb__links'>
                            <div className='spielbetrieb__link'>
                                <Tooltip title="Newsletter">
                                    <a href='https://seu2.cleverreach.com/f/365036-367852/' target='_blank'>
                                        <NotificationOutlined />
                                    </a>
                                </Tooltip>
                            </div>
                            <div className='spielbetrieb__link'>
                                <Tooltip title="eMail">
                                    <a href='mailto:info@spielbetrieb.online' target='_blank'>
                                        <MailOutlined />
                                    </a>
                                </Tooltip>
                            </div>
                            <div className='spielbetrieb__link'>
                                <Tooltip title="Linktree">
                                    <a href='https://linktr.ee/spielbetrieb' target='_blank'>
                                        <LinkOutlined />
                                    </a>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='phone__container'>
                    <div className="phone" id='phone'>
                        <Phone
                            color='white'
                            content={
                                <div className='merrier__container' id='merriercontainer'>
                                    <div className='merrier__background'></div>
                                    <div className='merrier__title'>Merrier</div>
                                    <div className='merrier__subtitle'>{t("general.by")} Spielbetrieb</div>
                                </div>
                            } />
                    </div>
                </div>
                <div className="phone__mobileContainer">
                    <Phone
                        color='white'
                        content={
                            <div className='merrier__container' id='merriercontainermobile'>
                                <div className='merrier__background'></div>
                                <div className='merrier__title'>Merrier</div>
                                <div className='merrier__subtitle'>{t("general.by")} Spielbetrieb</div>
                            </div>
                        } />
                </div>
            </div>
        </>
    )
}