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

    },

    UpLoaderImage(imagelist, token){

       const uploads = Array.from(imagelist).map(image =>
            { 
                const formData = new FormData(); 
                formData.append('image',image);
            
                return axios.post('https://api.imgur.com/3/image', formData,{
                     headers:{
                        Authorization: `Bearer ${token}`}})

            });
            
            return Promise.all(uploads);
        /* 
        1) Array.From tem o efeito de transformar o objeto "tipo" array... em um array de verdade
        3) estamos usando o .map para mapear o array em questao e realizar determinadas acoes para cada item
        do array        
        3) FormData vem do javascript e cria um vinculo (um link virtual) entre Dado no pc que queremos 
        enviar para o servidor. 
        4) Estamos usando a chave 'image' no formData.append por solicitacao do backend para inserirmos imagens
        
        5) Promise eh um objeto utilizado para processamento assincrono. No caso em questao significa 
        Promise.all(uploads) => Quando todos os uploads tiverem acabado, informe (return) 
        
        Um Promise está em um destes estados: 

            pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
            fulfilled (realizada): sucesso na operação.
            rejected (rejeitado):  falha na operação.
*/
        

    },


};