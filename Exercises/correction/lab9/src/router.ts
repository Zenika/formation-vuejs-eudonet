import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import ShowList from './pages/ShowList.vue'

const routerHistory = createWebHistory()

export const routes: RouteRecordRaw[] = [
  { name: 'shows', path: '/', component: ShowList },
  {
    name: 'showDetail',
    path: '/shows/:showId',
    component: () => import('./pages/ShowListItemDetails.vue'),
    props: true,
  },
  {
    name: 'favorites',
    path: '/favorites',
    component: () => import('./pages/ShowListFavorites.vue'),
  },
  { name: 'notFound', path: '/:catchAll(.*)', redirect: '/' },
]

const router = createRouter({
  history: routerHistory,
  routes,
})

export default router
