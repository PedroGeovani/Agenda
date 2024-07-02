<script lang="ts">
import { type User } from '../services/type'
import api from '../services/api';


export default {
    name : "Page",
    data() {
        return{          
            listUser : [] as User[],          
        }
    },//data
    components :{
        api
    },//componets
    mounted () { 
        api
        .get('/users')
        .then(response => (this.listUser = response.data))
        }      
    }
</script>

<template >   
    <div>
        <div>             
            <a class="subtitle"> Contatos </a>
            <router-link class="routelink" :to="{name:'AddContact'}">Adicionar</router-link>          
        </div> 

        <div class="boxdata" >  
            <div v-for="(nameUser,index) in listUser" :key="index">
                <a> Nome: {{ nameUser.name }} </a>
                <router-link class="detailcontact" :to="{name: 'Detail', params:{id: nameUser.id}}" :key="index"> Detalhes </router-link>  
            </div>
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

.routelink{ 
    display: inline-block;
    margin-left: 50px;
    margin-bottom: 10px;
    padding: 2px 30px;
    border-radius: 30px;
    font-size: 16px;  
    font-weight: 600;  
    color: rgb(90, 90, 255);
    text-decoration: none;
}

.detailcontact{     
    display: inline-block;
    background: rgb(255, 255, 255);
    margin-left: 30px;
    margin-bottom: 5px;
    padding: 2px 30px;
    border-radius: 30px;
    font-size: 16px;  
    font-weight: 600;  
    border-style: double;
    border-color: rgb(90,90,255);
    color: rgb(90, 90, 255);
    text-decoration: none;
}
.subtitle{    
    font-size: 16px;  
    font-weight: 600;  
    color: rgb(255,255,255);
    background: rgb(90,90,255);
    margin-left: 30px;
    margin-bottom: 5px;
    padding: 5px 30px;
    border-radius: 30px;
    font-size: 16px;  
    font-weight: 600;     
}
</style>
