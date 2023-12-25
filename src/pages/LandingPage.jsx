import React from 'react';
import { useTranslation } from "react-i18next";

import './LandingPage.less';

export const LandingPage = () => {
    const { t } = useTranslation();

    return (
        <div className="landingPage__container">
            <div className="layout--copy-left">
                <div className='pca-hold circle-animation'>
                    <div className='pca-main'>
                        <div className='pca-inner'>
                            <div className="circle">
                                THIS IS MERRIER
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
            </div>
            <div>
                Spielbetrieb
            </div>
        </div>
    )
}