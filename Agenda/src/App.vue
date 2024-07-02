<script lang="ts">

import NavBar from './components/navbar/NavBar.vue';

export default{
  name : "App",
  components : { 
    NavBar
  }//components
}
</script>

<template>
  
   <NavBar/> 
   <router-view></router-view>

</template>
