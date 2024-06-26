<template>
<a>
    <button class="button_style"> Detalhes </button>
</a>
</template>

<script lang="ts">
    export default{
        name : "button",      
        props : {
            id : Number
        },
    }
</script>

<style scoped>
.button_style{    
    background:rgb(90, 90, 255);
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 700;   
    height: 30px;
    border-radius: 8px; 
    width: 200px;
}
</style>