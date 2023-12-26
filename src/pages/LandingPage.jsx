import React from 'react';
import { useTranslation } from "react-i18next";

import SpielbetriebLogo from "../img/logos/spielbetriebLogo.png";
import { Phone } from '../components/Phone/Phone';

import './LandingPage.less';

export const LandingPage = () => {
    const { t } = useTranslation();

    return (
        <div className="landingPage__container">
            <div className='spielbetrieb__container'>
                <div className='spielbetrieb__logoAndText'>
                    <img src={SpielbetriebLogo} id="spielbetriebLogo" className='spielbetrieb__logo' />
                    <div className="spielbetrieb__text">Spielbetrieb </div>
                    <div className="spielbetrieb__subtext">{t('general.commingsoon')} </div>
                </div>
            </div>
            <div className='phone__container'>
                <div className="phone">
                    <Phone color='white' content={<>Merrier</>} />
                </div>
            </div>
        </div>
    )
}