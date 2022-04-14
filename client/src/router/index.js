import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import Register from '../components/register.vue'
import Login from '../components/login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router