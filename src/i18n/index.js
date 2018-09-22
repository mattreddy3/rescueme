// Temporary i18n solution

import * as en from './i18n_en'
import * as es from './i18n_es'

// use native array navigator.languages?
const browserLanguages = navigator.languages

const selectI18n = () => {
    return browserLanguages.reduce((acc,browserLanguage) =>{
        if(Object.keys(acc).length>0){return acc}
        switch(browserLanguage){
            case "en-US":
            case "en":
                return acc = es // DEFAULT SPANISH
            default:
                return acc
        }

    }, {})
}


export default {
    ...selectI18n()

}