import { createWebHistory, createRouter } from 'vue-router'

//FrontEnd
import HomePage from "../pages/HomePage.vue"
import AboutPage from '../pages/AboutPage.vue'


const routes = [
     //FrontEnd
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
