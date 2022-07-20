<template>
    <div class="dropper">
        <input type="file" @change="UploadImages($event.target.files)" multiple accept="image/*" /> 
        <!--
        1) O @Change sera acionado sempre que houver mudança no input em questao. 
        Quando acionado, chamara a funcao UploadImages. 
        Sobre os parenteses, ocorre a seguintes questao: Estamos dizendo para a funcao UploadImages
        Trabalhar com o que vier de $event.target.files (nao eh uma varivel da funcao, mas o elemento que
        sera enviado a ela).
        sobre o $event, estamos dizendo que essa carga de trabalho vira do evento que OCASIONOU a mudanca... e nao
        de alguma outra funcao interna. Portanto, o que ocorrerá no final das constas eh..
        @Change -> $event.target.files (passara as imagens enviadas) -> UpLoadImages /
        
        Sobre os outros itens: 
        2) multiple = permite que seja feito upload de varios arquivos ao mesmo tempo
        3) accept="image/*" = somente arquivos de imagens serao aceitos -->
        
        <span> Drag your file here!</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex';


 export default {
        name: 'UploadForm',
        methods: mapActions(['UploadImages'])
    }

</script>

<style scoped>

.dropper {
    height: 30vh;
    border: 2px dashed black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

}

.dropper:hover {
    background-color: #eee;
}

input {

    width: 100%;
    height: 30vh;
    position: absolute;
    /* Estamos fazendo o input tomar toda a classe com altura igual a da classe e comprimento 100% */
    opacity: 0; /* Faz o sinal do input arquivo desaparecer, mas continuar na tela */ 

}

</style>