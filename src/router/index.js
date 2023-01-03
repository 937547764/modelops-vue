import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/datasets',
        name: 'Data',
        component: () =>
            import ('../views/Datasets.vue')
    },
    {
        path: '/datadetails',
        name: 'DataDetails',
        component: () =>
            import ('../views/DataDetails.vue')
    },
    {
        path: '/model',
        name: 'Model',
        component: () =>
            import ('../views/Model.vue')
    },
    {
        path: '/modeldetails',
        name: 'ModelDetails',
        component: () =>
            import ('../views/ModelDetails.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router