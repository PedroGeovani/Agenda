<script lang="ts">

export default{
  name : 'App',
  data() {
    return {
      title : 'Agenda',
      home : 'Contact'
    }  
  },
}
</script>

<<<<<<< HEAD
<template>

  <div class="pagestyle">
    <div> <router-link class="header" to="/"> Agenda </router-link> </div>  
    
    <router-view/>
    
  </div>

=======
<template> 
<div class = "pagestyle">
  <Header/>
 
  <router-link to="./"/>
  <router-link :to="{ name:'Contact'}"> Contatos </router-link>|
  <router-link :to="{ name:'AddContact'}"> Adicionar </router-link>|
  <router-link :to="{ name:'Detail'}"> Detalhes </router-link>|
  <router-link :to="{ name:'EditContact'}"> Editar </router-link>  
  <router-view/>
 
</div>
>>>>>>> 76f7e8e (updateproject)
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

