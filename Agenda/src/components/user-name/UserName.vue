

<script lang="ts">
export default{
    name: "user_name",     
    props : {
        username : String,
    }
}
</script>

<template>                     
    <div class="text"> {{ username }} </div>      
</template>

<style scoped>
.text{
    display: inline-block;
    background: rgb(220, 230, 255);   
    font-size: 16px;
    color: rgb(0, 0, 0);
    padding-left: 16px;
    border-radius: 5px;
    border: solid;
    width: 60%;
    border-color: rgb(140, 170, 255);

}
</style>
