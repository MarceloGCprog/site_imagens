import qs from 'qs';

const CLIENT_ID = '02a14b52cec6ab7';
const ROOT_URL = 'https://api.imgur.com/oauth2/authorize';
const RESPONSE_TYPE = 'token';

export default {

    login () {
        const querystring = {
        client_id:CLIENT_ID,
        response_type: RESPONSE_TYPE,
    };

    window.location =`${ROOT_URL}?${qs.stringify(querystring)}`;
    console.log(`${ROOT_URL}?${qs.stringify(querystring)}`);
    },


};