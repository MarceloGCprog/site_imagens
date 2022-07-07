import api from '../../api/imgur';


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

    /*login: function(){
        return api.login();
    },*/
    login: () => {
        api.login();
      }

};

export default {
    state: state,
    actions:actions,
    mutations: mutations,
    getters: getters
}

