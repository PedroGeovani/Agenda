<template>
  <div class="pagestyle">  
    <NavBar/>
    <router-view/>    
  </div> 

</template>

<script lang="ts">
import NavBar from './components/navbar/NavBar.vue'

export default{
  name : 'App',
  components:{
    NavBar
  },  
}
</script>



<style scoped>
.pagestyle{
    background: rgb(220, 230, 255); 
}
</style>

