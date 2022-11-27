import { createRouter, createWebHistory } from 'vue-router'
import LessonsList from '../view/LessonsList.vue'
const routes = [
    {
        path: '/',
        name: 'LessonsList',
        component: LessonsList
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
