import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const BUILD = 'local';

export const init = (i18nPath = '/i18n/{{lng}}.json') =>
    i18n
        .use(backend)
        .use(detector)
        .use(initReactI18next)
        .init({
            compatibilityJSON: 'v4',
            fallbackLng: ['en'],
            keySeparator: false,
            nsSeparator: false,
            interpolation: {
                escapeValue: false,
            },
            backend: {
                loadPath: `${i18nPath}?${BUILD}`,
            },
            react: {
                useSuspense: false,
            },
            detection: {
                order: ['localStorage', 'navigator'],
                lookupLocalStorage: 'lng',
                lookupFromPathIndex: 0,
                lookupFromSubdomainIndex: 0,
                caches: ['localStorage'],
                checkWhitelist: true,
                checkForSimilarInWhitelist: true,
                convertDetectedLanguage: (lng) => {
                    // Convert fr-FR, fr-CA, etc. to fr
                    if (lng.startsWith('fr')) {
                        return 'fr';
                    }
                    // Convert en-US, en-GB, etc. to en
                    if (lng.startsWith('en')) {
                        return 'en';
                    }
                    return lng;
                },
            },
            supportedLngs: ['en', 'fr'],
        });

export default i18n;

init();
