<script lang="ts">

import ButtonUserAdd from './components/buttons/ButtonUserAdd.vue'
import LayoutPage from './components/LayoutPage.vue'

export default{
<<<<<<< HEAD
  name : "App",
  data(){
    return{
      title : "Agenda: Projeto iniciado"
    }
  },//data
  components : {
    ButtonUserAdd,
    LayoutPage,
  }//components

}
</script>

<template> 
=======
  name : 'App',
  data() {
    return {
      title : 'Agenda',
      home : 'Contact'
    }  
  },
  mounted(){

  }
}
</script>

<template>
  <div class="pagestyle">
      <div> <router-link class="header" to="/"> Agenda </router-link> </div>   
      <div> <router-link :to="{path : '/'}"> </router-link> </div>   
      <router-view/>    
  </div>
  
>>>>>>> b409065 (Upadate)

  <h1> {{title}} </h1>
  <LayoutPage/>
  <ButtonUserAdd/>
  
</template>

<style scoped>

</style>
