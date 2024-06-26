<template>
  <div class="container">
    <form @submit.prevent="actionButtonSend">
      <div class="form-group">
        <label for="name">Nome completo: </label>
        <input id="name" type="text" v-model="name" :placeholder="namePlaceholder" />
      </div>
      <div class="form-group">
        <label for="address">Endereço: </label>
        <input id="address" type="text" v-model="address" :placeholder="addressPlaceholder" />
      </div>
      <div class="form-group">
        <label for="city">Cidade: </label>
        <input id="city" type="text" v-model="city" :placeholder="cityPlaceholder" />
      </div>
      <div class="form-group">
        <label for="phone">Telefone: </label>
        <input id="phone" type="text" v-model="phone" :placeholder="phonePlaceholder" />
      </div>
      <div class="form-group">
        <label for="email">E-mail: </label>
        <input id="email" type="text" v-model="email" :placeholder="emailPlaceholder" />
      </div>
      <button type="submit" class="btn">{{ buttonSend }}</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    namePlaceholder: {
      type: String,
      default: 'Nome'
    },
    addressPlaceholder: {
      type: String,
      default: 'Endereço',
    },
    cityPlaceholder: {
      type: String,
      default: 'Cidade',
    },
    phonePlaceholder: {
      type: String,
      default: 'Telefone',
    },
    emailPlaceholder: {
      type: String,
      default: 'E-mail',
    },
    buttonSend: {
      type: String,
      default: 'Salvar',
    }
  },
  emits:['onSendValues'],
  data() {
    return {
      name: '',
      address: '',
      city: '',
      phone: '',
      email: ''
    };
  },
  methods: {
    actionButtonSend() {
      this.$emit('onSendValues',this.name, this.address, this.city, this.phone, this.email);
    },
  }
};
</script>

<style scoped>

.container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
  max-width: 100%;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 3px;
  color: #555;
}

.form-group input {
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.form-group input:focus {
  border-color: #007BFF;
  outline: none;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
}

.btn:hover {
  background-color: #0056b3;
}
</style>