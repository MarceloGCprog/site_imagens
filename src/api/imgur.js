import qs from 'qs';
import axios from 'axios';

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
    },

    imageFetcher (token){
        return axios.get('https://api.imgur.com/3/account/me/images',{
            headers:{
                Authorization: `Bearer ${token}` }
            //Axios eh uma lib para fazer requisicoes html. Aqui estamos fazendo um get e enviando um
                //Header especifico PELA API (doc Imgur) para pedir a galeria de imagens do usuario
        });

    }


};