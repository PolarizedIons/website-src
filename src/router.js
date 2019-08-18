import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/pages/HomePage';
import FaqPage from '@/components/pages/FaqPage';
import SocialPage from '@/components/pages/SocialPage';
import SkillPage from '@/components/pages/SkillPage';
import NotFoundPage from '@/components/pages/NotFoundPage';

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
    {
        path: '/skills',
        name: 'SkillPage',
        component: SkillPage,
        meta: {
            title: 'Skills',
        },
    },
    {
        path: '*',
        name: 'NotFoundPage',
        component: NotFoundPage,
        meta: {
            title: '404 - Not Found',
            hidden: true,
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
