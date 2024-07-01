<script lang="ts">
import api from '../services/api'
import { type User } from '../services/type'

export default {
    name : "Page",
    data() {
        return{
            user : {} as User
        }
    },//data methods: {
    methods:{
        deleteUser(index: String){
            api
            .delete('/users/'+index)
            .then( () => console.log("Deletado com sucesso!",
            )
        )} 
    },   
    mounted () { 
        api
        .get('/users/'+this.$route.params.id)
        .then(response => (this.user = response.data))         
        },//mounted 
}
</script>

<template >
    <div> 
        <!-- Header e button -->
        <div> 
            <a class="subtitle">Detalhar</a>            
                <router-link class="routelink" :to="{name:'Contact'}"> Contatos </router-link>
                <router-link class="routelink" :to="{name:'EditContact'}"> Editar </router-link>
                <router-link class="routelink" :to="{name:'Contanct'}" :v-bind="deleteUser(user.id)"> Apagar </router-link>
               
           
        </div>
        <!-- field e data -->
        <div class="boxdata" >
        <div>Name:     {{ user.name }} </div>     
        <div>Endereço: {{ user.address }} </div>  
        <div>Cidade:   {{ user.city }} </div> 
        <div>Fone:     {{ user.phone }} </div> 
        <div>Email:    {{ user.e_mail }} </div> 
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
.collumn{ 
    columns: 2; 
    margin-bottom: 10px;
    width: 870px; 
}

</style>
