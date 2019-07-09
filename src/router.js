import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/pages/HomePage';
import FaqPage from '@/components/pages/FaqPage';
import SocialPage from '@/components/pages/SocialPage';

Vue.use(Router);

export const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
        meta: {
            title: 'Home',
        },
    },
    {
        path: '/faq',
        name: 'FaqPage',
        component: FaqPage,
        meta: {
            title: 'FAQ',
        },
    },
    {
        path: '/social',
        name: 'SocialPage',
        component: SocialPage,
        meta: {
            title: 'Social',
        },
    },
];

export const router = new Router({
    mode: 'history',
    routes,
});

router.afterEach((to, from) => {
    document.title = to.meta.title + ' - PolarizedIons.net';
});
