<script lang="ts">

import ButtonUserAdd from './components/buttons/ButtonUserAdd.vue'
import LayoutPage from './components/LayoutPage.vue'

export default{
  name : "App",
  data(){
    return{
      title : "Calculadora: Projeto iniciado"
    }
  },//data
  components : {
    ButtonUserAdd,
    LayoutPage,
  }//components

}
</script>

<template> 

  <h1> {{title}} </h1>
  <LayoutPage/>
  <ButtonUserAdd/>
  
</template>

<style scoped>

</style>
