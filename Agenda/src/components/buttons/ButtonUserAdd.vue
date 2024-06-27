<template>
    <div>
        <button class="button_style"> {{textButton}} </button>
    </div>
    <button> {{str}} </button>
</template>

<script lang="ts">
    export default{
        name : "button",      
        props : {
            textButton : String
        }
    }
</script>

<style scoped>

.button_style{    
    background:rgb(90, 90, 255);
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 700;
    height: 40px;
    border-radius: 10px; 
    width: 300px;
}

</style>
        name : "button",
        data(){
            return{
                str : "Edite aqui o botão"
            }
        }
    }
</script>
