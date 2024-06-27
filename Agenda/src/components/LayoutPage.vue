
<script lang="ts">
import ButtonUserAdd from './buttons/ButtonUserAdd.vue'
import UserName from './user-name/UserName.vue'
import FormComponent from './form/FormComponent.vue'

export default {
    name: "Page",
    data() {
        return {
            title: "Agenda",
            subtitle: "Contatos",
            buttonadd: "Adicionar Contato",
            tag: "Detalhes",
            nome: "Roberto",
            text: [
                "nome de usuario 1",
                "nome de usuario 2",
                "nome de usuario 3",
                "nome de usuario 4",
                "nome de usuario 5",
                "nome de usuario 6",
                "nome de usuario 7",
                "nome de usuario 8",
                "nome de usuario 9",
                "nome de usuario 10",
                "nome de usuario 11",
                "nome de usuario 12",
                "nome de usuario 13",
                "nome de usuario 14"],
        }
    },//data
    components: {
        ButtonUserAdd,
        UserName,
        FormComponent,
    },//componets
    methods: {
        valuesThisForm(name: String, address: String, city: String, phone: String, email: String) {
            console.log(name, address, city, phone, email);
        }
    }
}
</script>

<template>
    <div class="pagestyle">

        <div class="header"> {{ title }} </div>

        <div class="collumn">
            <div class="subtitle_text"> {{ subtitle }} </div>
            <div class="item">
                <ButtonUserAdd :textButton="buttonadd" />
            </div>
        </div>

        <div class="box_data">
            <UserName v-for="item in text" :key="item" :username="item" :tagbutton="tag" />
        </div>

        <div class="box_data">
            <div class="fomulario">
                <FormComponent :namePlaceholder="nome" @on-send-values="valuesThisForm" />
            </div>
        </div>


    </div>

</template>

<style scoped>
.pagestyle {
    background: rgb(220, 230, 255);
}

.header {
    background: rgb(90, 90, 255);
    height: 50px;
    font-size: 48px;
    color: white;
    padding-top: 20px;
    padding-bottom: 40px;
    padding-left: 40px;
    border-bottom-left-radius: 20px;
    margin-bottom: 10px;
}

.box_data {
    background: white;
    width: 840px;
    padding: 20px;
    margin-left: 30px;
    border-radius: 15px;
}

.item {
    margin-left: 130px;
}

.subtitle_text {
    font-size: 28px;
    font-weight: 600;
    color: rgb(90, 90, 255);
}

.background_itens {
    background: rgb(255, 255, 255);
    border: 3px;
    margin-left: 20px;
    border-color: rgb(0, 4, 245);
    border-radius: 15px;
}

.collumn {
    margin-left: 40px;
    columns: 2;
    margin-bottom: 10px;
    width: 870px;
}
</style>
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
