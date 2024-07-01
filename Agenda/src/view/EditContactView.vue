<script lang="ts">
import ButtonUserAdd from '../components/buttons/ButtonUserAdd.vue'
import UserName from '../components/user-name/UserName.vue'

export default {
    name : "Page",
    data() {
        return{
            subtitle : "Detalhe do Contato",
            buttonadd : "Salvar Alterações",   
            tag : 'es'   ,      
            text : [
            "Nome: ",
            "Endereço: ",
            "Bairro: ", 
            "Cidade: ", 
            "Estado: ", 
            "Celular: ", 
            "WhatsApp: "],
        }
    },//data
    components :{
        ButtonUserAdd,
        UserName,
    },//componets
    
}
</script>

<template >
    <div> 
        <!-- Header e button -->
        <div> 
            <a class="subtitle">Editar</a>                
            <router-link class="routelink" :to="{name: 'Contact'}">Contatos</router-link>
        </div>

        <!-- field e data -->
        <div class="boxdata" >  
            <UserName v-for="item in text" :key ="item" :username="item" :tagbutton="tag"/>        
        </div>
    </div>             
</template>

<style scoped>

.boxdata{
 background: white;
 width: 840px;
 padding: 20px;
 margin-left: 30px;
 border-radius: 15px;
}

.subtitle{  
    margin-left: 30px;  
    font-size: 24px;  
    font-weight: 600;  
    color: rgb(90, 90, 255);
}
.routelink{ 
    display: inline-block;
    background: rgb(90, 90, 255);
    margin-left: 50px;
    margin-bottom: 10px;
    padding: 5px 30px;
    border-radius: 30px;
    font-size: 24px;  
    font-weight: 600;  
    color: rgb(255, 255, 255);
    text-decoration: none;
}

</style>
