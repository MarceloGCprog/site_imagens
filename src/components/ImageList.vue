<template>
    <div >
        <div v-for="image in AllImages" v-bind:key="image.id">
        <img class="ui middle aligned tiny image" v-bind:src="image.link"/>
        <span>Id {{image.id}}</span>        
        
        </div>
         
        
        <!-- cada 'image' eh um array com diversas informacoes que bem do backend
        a propriedade src faz reference ao link que a tag 'img' precisa renderizar
        jah a prop key eh obrigatoria e eh um meio de definir aquela info. como unica  -->
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        name: 'ImageList',
        computed: mapGetters(['AllImages']),
        methods: mapActions(['FetchImages']),
        created(){ //funcao chamada na criacao da pagina. Tudo que estiver aqui sera renderizado
        
        this.FetchImages();
        }

    }
</script>

<style scoped>

</style>