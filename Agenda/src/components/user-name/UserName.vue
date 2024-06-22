

<script lang="ts">

import Button from './button-details/ButtonDetails.vue'

export default{
    name: "user_name", 
    components: {
        Button,
    },   
    props : {
        tagbutton: String,
        username : String,
    }
}
</script>

<template>
    
        <div class="column">
            
            <div class="text"> {{ username }} </div> 
            
            <div class="button"> 
                <Button :textButton="tagbutton"/>
            </div> 
        </div>
    
</template>

<style scoped>

.text{    
    background: rgb(220, 230, 255);   
    font-size: 16px;
    color: rgb(0, 0, 0);
    padding-left: 16px;
    border-radius: 5px;
    border: solid;
    width: 600px;
    border-color: rgb(140, 170, 255);

}

.button{
    margin: 10px;
    margin-left: 240px;
}

.column{
    width: 700px;
    columns: 2;
}

</style>
