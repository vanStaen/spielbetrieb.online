import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";

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
        console.log('windowInnerWidth', windowInnerWidth);
        if (windowInnerWidth > 675) {
            setTimeout(() => {
                elementPhone.style.transform = 'translate3d(-33vw, -3%, 0)';
                elementSpielbetrieb.style.transform = 'translate3d(-15vw, 0%, 0)';
            }, "500");
        }
    }, []);

    return (
        <div className="landingPage__container">
            <div className='spielbetrieb__background' id='spielbetriebbackground'></div>
            <div className='spielbetrieb__container' id='spielbetriebcontainer'>
                <div className='spielbetrieb__logoAndText' id='spielbetrieb'>
                    <img src={SpielbetriebLogo} id="spielbetriebLogo" className='spielbetrieb__logo' />
                    <div className="spielbetrieb__text">Spielbetrieb </div>
                    <div className="spielbetrieb__subtext">{t('general.commingsoon')} </div>
                </div>
            </div>
            <div className='phone__container'>
                <div className="phone" id='phone'>
                    <Phone
                        color='white'
                        content={
                            <div className='merrier__container'>
                                <div className='merrier__title'>Merrier</div>
                                <div className='merrier__subtitle'>by spielbetrieb</div>
                            </div>
                        } />
                </div>
            </div>
        </div>
    )
}