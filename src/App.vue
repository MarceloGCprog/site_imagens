<template>
    <div>
        <AppHeaderVue></AppHeaderVue>
        <router-view></router-view>
    </div>
</template>

<script>
    import AppHeaderVue from './components/AppHeader.vue';
    export default {
        name: 'App',
        components:{
            AppHeaderVue
        }
    };
</script>