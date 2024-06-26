<script lang="ts">
import ButtonUserAdd from '../components/buttons/ButtonUserAdd.vue'
import UserName from '../components/user-name/UserName.vue'

export default {
    name : "Page",
    data() {
        return{
            subtitle : "Detalhe do Contato",
            buttonadd : "Salvar Alterações",
            tag : "Editar",
            text : [
            "Nome: ",
            "Endereço: ",
            "Bairro: "],
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
        <div class="collumn"> 
            <div class="subtitle_text"> {{ subtitle }} </div> 
            <div class="item"> <ButtonUserAdd :textButton="buttonadd"/> </div>
        </div>

        <!-- field e data -->
        <div class="box_data" >  
            <UserName v-for="item in text" :key ="item" :username="item" :tagbutton="tag"/>        
        </div>
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
    width: 870px; 
}

</style>
