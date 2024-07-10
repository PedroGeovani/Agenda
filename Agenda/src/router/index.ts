import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import HomeView from '../views/HomeView.vue'
=======

import ContactsView from '@/views/contact/ContactView.vue'
import AddContactView from '@/views/addcontact/AddContactView.vue'
import EditContactView from '@/views/edit/EditView.vue'

import ContactsViewA from '@/viewsA/contact/ContactViewA.vue'
import AddContactViewA from '@/viewsA/addcontact/AddContactViewA.vue'
import EditContactViewA from '@/viewsA/edit/EditViewA.vue'
>>>>>>> feature/principal

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
<<<<<<< HEAD
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
=======
    { path: '/Contacts', name: 'Contacts', component: ContactsView },
    { path: '/AddContact', name: 'AddContact', component: AddContactView },
    { path: '/EditContactView', name: 'EditContactView', component: EditContactView },
    { path: '/EditContactView/:id', name: 'EditContactViewId', component: EditContactView },

    { path: '/ContactsA', name: 'ContactsA', component: ContactsViewA },
    { path: '/AddContactA', name: 'AddContactA', component: AddContactViewA },
    { path: '/EditContactViewA/', name: 'EditContactViewA', component: EditContactViewA },
    { path: '/EditContactViewA/:id', name: 'EditContactViewAId', component: EditContactViewA }
>>>>>>> feature/principal
  ]
})

export default router
