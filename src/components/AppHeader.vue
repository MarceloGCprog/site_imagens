<template>
    <div class="ui secondary pointing menu">
        <router-link class=" active item" to="/">
        Image Storage
        </router-link>
        
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
            <!-- Usando o vueRouter, substituimos o <a></a> por <router-link> </router-link> e o href="" por to=""
            Dessa forma ocorrera a atualizacao sem o reload completo da pagina-->
                <router-link to='/' class="item" > Galleries</router-link>
                <router-link to='/upload' class="item" > Upload  </router-link>
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