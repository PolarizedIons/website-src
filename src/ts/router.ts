import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// @ts-ignore
import HomePage from '../components/HomePage.vue';
// @ts-ignore
import AboutPage from '../components/AboutPage.vue';
// @ts-ignore
import SocialPage from '../components/SocialPage.vue';

export const routes = [
    {
        path: '/',
        component: HomePage,
        meta: {
            name: "Home",
            id: "home",
        }
    },
    {
        path: '/about',
        component: AboutPage,
        meta: {
            name: "About",
            id: "about-me",
        }
    },
    {
        path: '/social',
        component: SocialPage,
        meta: {
            name: "Social",
            id: "social-media",
        }
    },
];

export const router = new VueRouter({
    routes,
    // mode: "history",
});
