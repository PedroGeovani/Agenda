<script lang="ts">
import Header from "./components/header/Header.vue";
export default{
  name : "App",
  components :{
    Header,
  }
}

</script>

<template> 
<div class = "pagestyle">
  <Header/>
  <router-link to="./"/>
  <router-view/>
</div>  
</template>

<style scoped>
.pagestyle{
    background: rgb(220, 230, 255); 
}
</style>

