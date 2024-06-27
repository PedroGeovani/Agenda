<script lang="ts">
import api from '../services/api'
import ButtonUserAdd from '../components/buttons/ButtonUserAdd.vue'
import UserName from '../components/user-name/UserName.vue'
import type { User } from '../services/type'
import UserNameDetail from '../components/user-name/UserNameDetail.vue';
import { routerKey, RouterLink } from 'vue-router';

export default {
    name : "Page",
    data() {
        return{
            subtitle : "Detalhe do Contato",
            buttonadd : "Salvar Alterações",
            tag : "Editar",
            listUser : [] as User[],
        }
    },//data
    components :{
        UserNameDetail,
        ButtonUserAdd,
        UserName,
    },//componets 
    props:{
        index : Number    
    },
    mounted () { 
        api
        .get('/users')
        .then(response => (this.listUser = response.data))              
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
        </div>

        <!-- field e data -->
        <div class="boxdata" >
            <UserNameDetail :username="listUser[Number('/id')]" :tagbutton="tag"/>        
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
