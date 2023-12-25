import React from 'react';
import { useTranslation } from "react-i18next";

import './Main.less';

export const Main = () => {
    const { t } = useTranslation();

    return (
        <div className='container'>
            Spielbetrieb TODO
        </div>
    )
}