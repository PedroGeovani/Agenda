<script lang="ts">
import ButtonDetails from '../components/button-details/ButtonDetails.vue';
import ButtonUserAdd from '../components/buttons/ButtonUserAdd.vue'
import UserName from '../components/user-name/UserName.vue'
import api from '../services/api'


export default {
    name : "Page",
    data() {
        return{ 
            addUser : "Adicionar Contato",
            tag : "Detalhes",
            listUser : ref(),
        }
    },//data
    components :{
        ButtonUserAdd,
        ButtonDetails,
        UserName,
        api
    },//componets
    
    mounted(){        
        //api
        //.get('name')
        //.then(response => (this.listUser.values = response))       

        //api.get('/users')
        //    .then((response) {
            // manipula o sucesso da requisição
        //    this.listUser = response;
        //})

        api({
            method: "get",
            url: "/users",
            responseType: "text",
        }).then(function (response) {
            response.data.pipe(listUser = response);
        });

    }
}
</script>

<template >
    <div> 
        <div v-for="item in listUser" :key="item"> 
            {{ item }}
        </div> 
        <!-- 
        <div class="collumn">             
            <div class="subtitle_text"> Contatos </div> 
            <div class="item"> <ButtonUserAdd :tag_button="addUser"/> </div>            
        </div>    

        <div class="box_data" >  
            <div v-for="(nameUser,index) in listUser" :key="index">
                <UserName :key ="index" :username="nameUser"/>
                <ButtonDetails key="index"/>               
            </div>
        </div> -->

    </div>
   
            
</template>

<style scoped>

.box_data{
 background: white;
 width: 840px;
 padding: 20px;
 margin-left: 30px;
 border-radius: 15px;
}

.item{
    margin-left: 130px;
}

.subtitle_text{    
    font-size: 28px;  
    font-weight: 600;  
    color: rgb(90, 90, 255);
}

.background_itens{
    background: rgb(255, 255, 255);
    border: 3px;
    margin-left: 20px;
    border-color: rgb(0, 4, 245);
    border-radius: 15px;
}

.collumn{ 
    margin-left: 40px;
    columns: 2; 
    margin-bottom: 10px;
    width: 500px; 
}

</style>
