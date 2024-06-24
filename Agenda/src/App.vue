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
  </div>

  <div>
    <router-link :to="{name : 'Contact'}"> Contatos </router-link>|
    <router-link :to="{name : 'Detail'}"> Detalhes </router-link> 
  </div>  
  
  <div class="box_data"> 
    <router-view/>
  </div>

</div>
</template>

<style scoped>
.pagestyle{
    background: rgb(220, 230, 255); 
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
</style>

