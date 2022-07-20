import api from '../../api/imgur';
import {router} from '../../main';

const state ={
    
    images : [],

}

const getters = {

    AllImages: state => state.images,

}

const mutations = {

    setImages: function(state,listImages){
        state.images = listImages;
    },

}

const actions = {

     FetchImages: async function( {rootState, commit}){ //rootState eh uma funcao do vuex que permite acessar TODOS os states 
                                        //de todos os modulos elencados no index.js e obter informacoes

        const token = rootState.auth.token; //correto seria fazer {token} = rootState.auth 
        const response = await api.imageFetcher(token);
        commit('setImages',response.data.data); //a array que vem da resposta tem um 'data' do axios e um 'data' do nome do servidor backend imgur
    },
/* eslint-disable */
    UploadImages: async function ({rootState}, uploadImgList){

        //Get de access token
        const { token } = rootState.auth; //comparar com a funcao do FetchImagens

        // Call API module to do de upload
        await api.UpLoaderImage(uploadImgList, token); //o await fara a funcao aguardar o promise resposta

        //Redirect to the gallerie (imgList component)
        router.push('/'); //ocorrera apos o await permitir que a funcao continue      

    }
};

export default {
    state: state,
    actions:actions,
    mutations: mutations,
    getters: getters
};