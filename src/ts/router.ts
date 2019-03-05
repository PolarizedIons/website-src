import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// @ts-ignore
import HomePage from '../components/HomePage.vue';
// @ts-ignore
import AboutPage from '../components/AboutPage.vue';

export const routes = [
    {
        path: '/',
        component: HomePage,
        meta: {
            name: "Home"
        }
    },
    {
        path: '/about',
        component: AboutPage,
        meta: {
            name: "About"
        }
    }
];

export const router = new VueRouter({
    routes,
    // mode: "history",
});
