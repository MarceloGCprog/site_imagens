import Vuex from 'vuex';

import Vue from 'vue';
import auth from './modules/auth';
import imageModulo from './modules/imageModulo';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {auth, imageModulo}
})