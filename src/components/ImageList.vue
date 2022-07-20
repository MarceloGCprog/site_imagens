<template>
<div>
    <div v-if="isLoggedIn" class="image-container">        
        <img  v-for="image in AllImages" v-bind:key="image.id" v-bind:src="image.link"/> 

        <!-- cada 'image' eh um array com diversas informacoes que bem do backend
        a propriedade src faz reference ao link que a tag 'img' precisa renderizar
        jah a prop key eh obrigatoria e eh um meio de definir aquela info. como unica  -->
    </div>
    <div v-else>
        <h2> Log in to get Started!!!</h2>
    </div>
</div>
    
</template>

<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        name: 'ImageList',
        computed: mapGetters(['AllImages', 'isLoggedIn']),
        methods: mapActions(['FetchImages']),
        created(){ //funcao chamada na criacao da pagina. Tudo que estiver aqui sera renderizado
        
        this.FetchImages();
        }

    }
</script>

<style scoped>
.image-container{
    column-count: 3; /* Estamos criando 3 colunas para as imagens */
    column-gap: 0px; /* As colunas se tocam (0px) */
}
img {
    max-width: 100%;
    padding: 5px; /* Dentro de cada coluna havera um espaco int de 5 px entre imagens */
}

</style>