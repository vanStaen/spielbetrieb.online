import { action, makeObservable, observable } from "mobx";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export class PageStore {

    selectedTheme = cookies.get('selectedTheme');
    selectedLanguage = cookies.get('selectedLanguage');
    allowCookie = cookies.get('allowCookie');

    constructor() {
        makeObservable(this, {
            selectedTheme: observable,
            setSelectedTheme: action,
            selectedLanguage: observable,
            setSelectedLanguage: action,
            allowCookie: observable,
            setAllowCookie: action,
        });
    }

    setSelectedTheme = (selectedTheme) => {
        this.selectedTheme = selectedTheme;
        cookies.set('selectedTheme', selectedTheme, { path: '/' });
    };

    setSelectedLanguage = (allowCookie) => {
        this.allowCookie = allowCookie;
        cookies.set('allowCookie', allowCookie, { path: '/' });
    };

    setAllowCookie = (allowCookie) => {
        this.allowCookie = allowCookie;
        cookies.set('allowCookie', allowCookie, { path: '/' });
    };
}

export const pageStore = new PageStore();
