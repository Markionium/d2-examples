// When the app is built for development, DHIS_CONFIG is replaced with the config read from $DHIS2_HOME/config.js[on]
// When the app is built for production, process.env.NODE_ENV is replaced with the string 'production', and
// DHIS_CONFIG is replaced with an empty object
const dhisDevConfig = DHIS_CONFIG; // eslint-disable-line

// This code will only be included in non-production builds of the app
// It sets up the Authorization header to be used during CORS requests
// This way we can develop using webpack without having to install the application into DHIS2.
if (process.env.NODE_ENV !== 'production') {
    jQuery.ajaxSetup({ headers: { Authorization: dhisDevConfig.authorization } }); // eslint-disable-line
}

import log from 'loglevel';
import { init, config, getManifest } from 'd2/lib/d2';

import './filtering/index';
import './deeperModels/index';

const baseUrl = dhisDevConfig.baseUrl;
console.log(dhisDevConfig.baseUrl);

init({
    baseUrl: `${baseUrl}/api/24`,
});
