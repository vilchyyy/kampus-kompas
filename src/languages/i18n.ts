import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from './english.json';
import ukrainian from './ukrainian.json';
import polish from './polish.json';

i18n
    .use(initReactI18next)
    .init({
        lng: "ukr", 
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        resources:{
            en: english,
            pl: polish,
            ukr: ukrainian,
        },
    })
    .catch((error) => {
        console.error(error);
    });

  export default i18n;