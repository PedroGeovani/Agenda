<script lang="ts">
import ButtonUserAdd from './buttons/ButtonUserAdd.vue'
import UserName from './user-name/UserName.vue'

export default {
    name : "Page",
    data() {
        return{  
            title: "Agenda",
            subtitle : "Contatos",
            text : [
            "nome de usuario 1",
            "nome de usuario 2",
            "nome de usuario 3", 
            "nome de usuario 4", 
            "nome de usuario 5", 
            "nome de usuario 6", 
            "nome de usuario 7",
            "nome de usuario 8",
            "nome de usuario 9",
            "nome de usuario 10", 
            "nome de usuario 11", 
            "nome de usuario 12", 
            "nome de usuario 13", 
            "nome de usuario 14"],
        }
    },//data
    components :{
        ButtonUserAdd,
        UserName,
    },//componets
}
</script>

<template >  

    <div class = "pagestyle">
        <div> 
            <div class="header_background">             
                <h1>  {{ title }} </h1>              
            </div> 

            <div class="background_itens"> 

                <h2> {{ subtitle }} </h2>

                <p> <UserName v-for="item in text" :key ="item" :username="item"/> </p> 
                
                <ButtonUserAdd class="button"/>      

            </div>

        </div>
    </div>
        
    
</template>

<style scoped>

.pagestyle{
    background: rgb(190, 253, 255);
    background-size: cover;
}

.header_background{
    background: rgb(118, 0, 228);    
    width: 60;
}

h1{
    padding: 20px;
    color: white;
}


h2{
    padding: 30px;
    color: rgb(118, 0, 228);
}

h3{
    padding: 30px;
    color: rgb(118, 0, 228);
}

.background_itens{
    background: rgb(255, 255, 255);
    border: 3px;
    margin-left: 20px;
    border-color: rgb(0, 4, 245);
    border-radius: 15px;
    width: 70%;
}


.button{
    align-items: top;
    flex-direction: column;
}



</style>
