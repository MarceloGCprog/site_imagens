import Vue from 'vue';
import App from './App';
import store  from './store/index';
import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler.vue';
import ImageList from './components/ImageList.vue';
import UploadForm from './components/UploadForm.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:[
        {path: '/', component: ImageList},
        {path: '/upload', component: UploadForm},
        {path: '/callback', component: AuthHandler}
    ], //usaremos o export para enviar o componente 'router' para outros arquivos dos sistema. Observar que
        //COmo nao usamos export 'default' ele precisara ser invocado {router}. Com as chaves!

})

new Vue ({
    router: router,
    store: store,
    render: h => h(App)
}).$mount('#app')

