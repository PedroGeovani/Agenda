<script lang="ts">
export default{
  name : 'App'
}
</script>

<template> 
  <div class="pagestyle">
  <router-link class="header" :to="{name :'Contact'}">Agenda</router-link> 
  
  <router-view/>
  
  </div>

</template>

<style scoped>
.pagestyle{
    background: rgb(220, 230, 255); 
}

.header{ 
    display: block;    
    background:rgb(90, 90, 255);
    height: 50px;
    font-size: 48px;
    color: white;
    padding-top: 20px;
    padding-bottom: 40px;
    padding-left: 40px;
    border-bottom-left-radius: 20px; 
    margin-bottom: 10px;
    text-decoration: none;
}
</style>

