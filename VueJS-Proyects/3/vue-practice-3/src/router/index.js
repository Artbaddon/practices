import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('../views/CharactersView.vue')
    },
    {
      path: '/characters/:id',
      name: 'character',
      component: () => import('../views/CharacterView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/favorites',
      name:'favorites',
      component:()=>import('../views/FavoritesView.vue')
    }
  ]
})

export default router
