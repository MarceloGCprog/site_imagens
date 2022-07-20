<template>
    <div>
        <AppHeaderVue></AppHeaderVue>
        <div class="ui container">
           <router-view></router-view> 
        </div>
        
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

<style scoped>



</style>