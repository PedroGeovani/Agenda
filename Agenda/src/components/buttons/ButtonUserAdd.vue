<template>
<ul>
    <button class="button_style"> {{textButton}} </button>
</ul>

</template>

<script lang="ts">
    export default{
        name : "button",
        data(){
            return{
                textButton : "Adicionar Usuário",
            }
        }
    }
</script>

<style scoped>

.button_style{
    background: rgb(223, 250, 255);
    width: 300px;
    height: 40px;
    border-radius: 10px;
    type
}

</style>