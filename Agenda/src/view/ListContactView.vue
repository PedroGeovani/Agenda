<script lang="ts">
import axios from 'axios';
import ButtonDetails from '../components/button-details/ButtonDetails.vue';
import ButtonUserAdd from '../components/buttons/ButtonUserAdd.vue'
import UserName from '../components/user-name/UserName.vue'
<<<<<<< HEAD
import { type User } from '../services/type'
import api from '../services/api';
=======
>>>>>>> 76f7e8e (updateproject)


export default {
    name : "Page",
    data() {
        return{ 
<<<<<<< HEAD
            addUser : "Adicionar Contato",
            tag : "Adicionar Contato", 
            nextView : "AddContact",            
            listUser : [] as User[],          
        }
=======
            addUser : "Adicionar Contato",             
            }
>>>>>>> 76f7e8e (updateproject)
    },//data
    components :{
        ButtonUserAdd,
        ButtonDetails,
        UserName,
<<<<<<< HEAD
        api
    },//componets
    mounted () { 
        api
        .get('/users')
        .then(response => (this.listUser = response.data))
        }      
    }
=======
    },//componets   
    mounted () {
        axios.get('https://6679b7a718a459f639512c41.mockapi.io/agenda/v1/users')
        .then(response => console.log(response))

    }
    //mounted    
}
>>>>>>> 76f7e8e (updateproject)
</script>

<template >
    <div>
<<<<<<< HEAD
        <div>             
            <a class="subtitle"> Contatos </a>
            <router-link class="routelink" :to="{name:'AddContact'}">Adicionar</router-link>          
        </div> 

        <div class="boxdata" >  
            <div v-for="(nameUser,index) in listUser" :key="index">
                <UserName :key ="index" :username="nameUser.name"/>
                <router-link class="addcontact" :to="{name: 'Detail', params: {id: index}}" :id="index"> Detalhes </router-link>             
            </div>
        </div>         
=======
        conectApi
        <div class="collumn"> 
            <div class="subtitle"> Contatos </div> 
            <div class="subtitle"> <ButtonUserAdd :textButton="addUser"/> </div>
        </div>
        
        <div class="box_data"> 
            
        </div>
>>>>>>> 76f7e8e (updateproject)
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

.addcontact{ 
    
    display: inline-block;
    background: rgb(90, 90, 255);
    margin-left: 30px;
    margin-bottom: 5px;
    padding: 5px 30px;
    border-radius: 30px;
    font-size: 16px;  
    font-weight: 600;  
    color: rgb(255, 255, 255);
    text-decoration: none;
}
.subtitle{    
    font-size: 28px;  
    font-weight: 600;  
    color: rgb(90, 90, 255);
}
</style>
