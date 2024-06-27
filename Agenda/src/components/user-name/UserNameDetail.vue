<script lang="ts">
export default{
    name: "user_name",    
    props : {
        username : [],
    },
}
</script>

<template>                     
    <div class="text" v-for="(data, index) in username " :key="index"> {{ data }} </div>      
</template>

<style scoped>
.text{
    margin: 10px 0px;
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
