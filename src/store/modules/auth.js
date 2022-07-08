import api from '../../api/imgur';
import qs from 'qs';


const state = {
    token : null,
}

const getters = {

    isLoggedIn: function(state) { return !!state.token},

};

const mutations = {

    setToken: function(state,token){ state.token = token},

};

const actions = {

    logout: function({commit}) {
        commit('setToken',null);
    },

    login: function(){
        return api.login();
    },
    finalizeLogin: function({commit}, hash){
        let strutHash = qs.parse(hash.replace('#','')); //strutHash recebe todo o hash enviado pela pagina callback do auth
                                                        //em seguida substitui o # por ' ' de modo a tirar o simbolo
                                                        //por fim, a lib qs transforma o hash restante em uma estrutura
                                                        // tipo chave valor.
        /* EXEMPLO HASH: 
        '#access_token=b117abc50573ecae122bbc3a767a276836b30bd2&expires_in=315360000&token_type=bearer&
        refresh_token=6b45e13b0d88819e3d8e3c12c0e7bc70aa08f87f&account_username=myvueimagesite&
        account_id=163416225'
        observar a estrutura:
        access_token =
        expires_in=
        token_type=
        refresh_token=
        account_username=
        account_id=
        Tudo separar por '&'
        */
        commit('setToken',strutHash.access_token);
        
    }
    

};

export default {
    state: state,
    actions:actions,
    mutations: mutations,
    getters: getters
}

