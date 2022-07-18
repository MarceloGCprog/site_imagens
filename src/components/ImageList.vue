<template>
    <div>
        Image List
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'ImageList',
        methods: mapActions(['FetchImages']),
        created(){ //funcao chamada na criacao da pagina. Tudo que estiver aqui sera renderizado
        
        this.FetchImages();
        }

    }
</script>

<style>

</style>