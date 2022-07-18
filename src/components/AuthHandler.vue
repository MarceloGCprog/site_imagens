<template>
    <div>
        Please Wait...        
    </div>

</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'AuthHandler',
        methods: mapActions(['finalizeLogin']), //importando a funcao lah do store/modules/auth
        created() {
            // metodo created (alem de outros) sao conhecidos como metodos lifecycle, ver outros na doc do vue

            this.finalizeLogin(window.location.hash); // funcao importada pelo mapActions 
            //window.location.hash coleta todo o dado do hash da barra de endereco que a 
            //pagina do oauth2 enviara apos o login (eh uma propriedade enviada atraves do browser)
        },
    };
</script>

<style>

</style>