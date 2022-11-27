import { createRouter, createWebHistory } from 'vue-router'
import LessonsList from '../view/LessonsList.vue'
import ShoppingCart from '../view/ShoppingCart.vue'
const routes = [
    {
        path: '/',
        name: 'LessonsList',
        component: LessonsList
    },
    {
        path: '/Shopping',
        name: 'ShoppingCart',
        component: ShoppingCart
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
