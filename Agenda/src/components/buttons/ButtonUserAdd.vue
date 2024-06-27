<template>
    <div>
        <button class="button_style" @click="$router.push({name: next})"> {{ tag_button }} </button>        
    </div>
</template>

<script lang="ts">
    export default{
        name : "button",
        props :{
            tag_button : String,
            next : String
        }, 
    }   
</script>

<style scoped>

.button_style{    
    background:rgb(90, 90, 255);
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 700;
    height: 40px;
    border-radius: 10px; 
    width: 300px;
}

</style>