import api from '../../api/imgur';

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

    UploadImages: function (){},

}

export default {
    state: state,
    actions:actions,
    mutations: mutations,
    getters: getters
};