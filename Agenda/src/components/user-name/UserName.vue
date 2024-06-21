<template>
    <div>
        <h2> {{ username }} </h2>
    </div>
</template>

<script lang="ts">

export default{
    name: "user_name",    
    props:{
        username : String,
    }
}

</script>

<style scoped>

h2{    
    size: 16px;
    color: rgb(118, 0, 228);
    margin-left: 8px;
    padding-left: 30px;
}
</style>
