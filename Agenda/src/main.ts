<<<<<<< HEAD


import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

=======
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
>>>>>>> feature/principal

app.mount('#app')
