<script lang="ts">

import ButtonUserAdd from './components/buttons/ButtonUserAdd.vue'
import LayoutPage from './components/LayoutPage.vue'

export default{
  name : "App",
  components : { 
    LayoutPage,
  }//components
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
  <div>
    <LayoutPage/>
  </div>
  
</template>

  <h1> {{title}} </h1>
  <LayoutPage/>
  <ButtonUserAdd/>
  
</template>

<style scoped>

</style>
