// When the app is built for development, DHIS_CONFIG is replaced with the config read from $DHIS2_HOME/config.js[on]
// When the app is built for production, process.env.NODE_ENV is replaced with the string 'production', and
// DHIS_CONFIG is replaced with an empty object
const dhisDevConfig = DHIS_CONFIG; // eslint-disable-line

import { init, config, getInstance } from 'd2/lib/d2';

import { filteringExample } from './filtering/index';
import { deeperFilteringExample } from './deeperModels/index';

// baseUrl should normally be set from the manifest.webapp to make sure it points to the correct DHIS2 root.
const baseUrl = dhisDevConfig.baseUrl;
console.log(dhisDevConfig.baseUrl);

// Register the i18n files to be used as sources (Note that this is done before initializing using the init())
config.i18n.sources.add(`./i18n-files/my_translations_nl.properties`); // Primary language
config.i18n.sources.add(`./i18n-files/english_fallback.properties`); // Fallback language

init({ baseUrl: `${baseUrl}/api/24` });

// After we retreive the inialized instance we can use that to locate keys.
getInstance().then(d2 => {
    console.log(d2.i18n.getTranslation('name'));
    console.log(d2.i18n.getTranslation('location'));
    console.log(d2.i18n.getTranslation('profession'));
});


getInstance().then(d2 => {
    filteringExample(d2);
    deeperFilteringExample(d2);
});
