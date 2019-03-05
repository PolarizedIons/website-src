import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import HomePage from '../components/HomePage.vue';

export const routes = [
    {
        path: '/',
        component: HomePage,
        meta: {
            name: "Home"
        }
    },
];

export const router = new VueRouter({
    routes,
    mode: "history",
});
