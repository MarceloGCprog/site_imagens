import Vue from 'vue';
import App from './App';
import store  from './store/index';
import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes:[
        {path: '/callback', component: AuthHandler}
    ],

})

new Vue ({
    router: router,
    store: store,
    render: h => h(App)
}).$mount('#app')

