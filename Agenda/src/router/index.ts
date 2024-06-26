import { createRouter, createWebHistory } from 'vue-router'
import DetailContactView from '../view/DetailContactView.vue'
import ListContactView from '../view/ListContactView.vue' 
import AddContactView from '../view/AddContactView.vue'
import EditContactView from '../view/EditContactView.vue'



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
    },
    {
      path: '/addContact',
      name: 'AddContact',
      component: AddContactView
    },
    {
      path: '/editContact',
      name: 'EditContact',
      component: EditContactView
    }
  ]
})

export default router
