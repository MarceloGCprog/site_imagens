<template>
    <div class="ui secondary pointing menu">
        <a class=" active item" href="/">
        Image Storage
        </a>
        
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <a href="#" class="item" > Galleries </a>
                <a href="#" class="item" > Upload  </a>
                <a class="item" @click="logout"  > Logout  </a>

            </div>
            <a v-else class="ui item" @click="login">
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
        methods: mapActions(['login','logout']),
        computed: mapGetters(['isLoggedIn'])
    }
</script>

<style scoped>
.horizontal{
    display: flex;
    flex-direction: row;
}

</style>