import { createRouter, createWebHistory } from 'vue-router'
import DetailContactView from '../view/DetailContactView.vue'
import ListContactView from '../view/ListContactView.vue' 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Contact',
      component: ListContactView
    },
    {
      path: '/detail',
      name: 'Detail',
      component: DetailContactView
    }
  ]
})

export default router
