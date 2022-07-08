<template>
    <div class="ui secondary pointing menu">
        <a class=" active item" href="/">
        Image Storage
        </a>
        
        <div class="right menu">
            <div class="row" v-if="isLoggedIn">
            <a href="#" class="ui item" >
            Galleries
            </a>
            <a href="#" class="ui item" >
            Upload
            </a>
            <a href="#" class="ui item" >
            Logout
            </a>

            </div>
            <a v-else href="#" class="ui item" @click="login">
            Login
            </a>
        
        </div>
    </div>
    
</template>

<script>

    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';

    export default {
        name:'AppHeader',
        methods: mapActions(['login']),
        computed: mapGetters(['isLoggedIn'])
    }
</script>

<style>

</style>