<script lang="ts">

import NavBar from './components/navbar/NavBar.vue';
//import module from './server/server.ts';

export default{
  name : "App",
  components : { 
    NavBar
  },//components
  
}
</script>

<template>
  <div> 
    <NavBar/>    

    <router-view></router-view>
  </div>

</template>
