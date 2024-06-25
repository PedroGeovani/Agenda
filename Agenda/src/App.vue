<script lang="ts">
import DetailContactView from './view/DetailContactView.vue'
import ListContactView from './view/ListContactView.vue'

export default{
  name : "App",
  data(vm) {
    return{
      subtitle : 'Contatos',
      textButton : ''
    }
  },
  components : { 
    ListContactView,
    DetailContactView,
  }//components
}

</script>

<template> 
<div>
  <div class = "pagestyle">
      
    <div class="header"> Agenda </div>    
    <router-link class="subtitle_text" :to="{name : 'Contact'}"> Contatos </router-link>    
    <router-link class="button_style" :to="{name : 'Detail'}"> Adicionar Contato </router-link> 
   </div>
    <div class="box_data">   <router-view/>  </div>
</div>
</template>

<style scoped>
.pagestyle{
    background: rgb(220, 230, 255); 
}

.button_style{
  background: rgb(90, 90, 255);
  font-size: 24px;
  color: white;
  display: inline-block;
  margin-left: 530px;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 30px;
  padding-right: 30px;
}


.header{     
    background:rgb(90, 90, 255);
    height: 50px;
    font-size: 48px;
    color: white;
    padding-top: 20px;
    padding-bottom: 40px;
    padding-left: 40px;
    border-bottom-left-radius: 20px; 
    margin-bottom: 10px;
}

.box_data{
 background: white;
 width: 840px;
 padding: 20px; 
 margin-left: 30px;
 border-radius: 15px;
}

.subtitle_text{ 
    margin-left: 30px;   
    font-size: 28px;  
    font-weight: 600;  
    color: rgb(90, 90, 255);
}
</style>

