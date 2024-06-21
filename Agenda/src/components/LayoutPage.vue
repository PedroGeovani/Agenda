<template>
    <div>
        <p>{{ text }}</p>
        <p> <ButtonUserAdd/> </p>
    </div>
</template>

<script lang="ts">
import ButtonUserAdd from './buttons/ButtonUserAdd.vue'

export default {
    name : "Page",
    data() {
        return{
            text : 'Texto Padrão'
        }
    },//data
    components :{
        ButtonUserAdd,
    },//componets

}
</script>