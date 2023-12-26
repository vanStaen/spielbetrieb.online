import React from 'react';
import { useTranslation } from "react-i18next";

import SpielbetriebLogo from "../img/logos/spielbetriebLogo.png";
import { Phone } from '../components/Phone/Phone';

import './LandingPage.less';

export const LandingPage = () => {
    const { t } = useTranslation();

    return (
        <div className="landingPage__container">
            <Phone color='white' content={<>Merrier</>} />
            <div className="SpielbetriebLogo">
                <img src={SpielbetriebLogo} id="soundcloud" />
                <div className="SpielbetriebText">Spielbetrieb | Coming soon</div>
            </div>
        </div>
    )
}