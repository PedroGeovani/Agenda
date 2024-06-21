<template>
    <div>
        <p>{{ text }}</p>
        <p> <ButtonUserAdd/> </p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonUserAdd from './buttons/ButtonUserAdd.vue'
import { text } from 'stream/consumers';

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