<script lang="ts">

import LayoutPage from './components/LayoutPage.vue'

export default{
  name : "App",
  components : { 
    LayoutPage,
  }//components
}
</script>

<template> 
  <div class="backgroundpage">
    <LayoutPage/>
  </div>
  
</template>

<style scoped>
.backgroundpage{
  background-image: url(./components/image/ImageBackground.jpg);
}
</style>
