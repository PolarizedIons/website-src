import 'normalize.css';
import Vue from 'vue';

// @ts-ignore
import App from '../components/App.vue';
import {router} from './router';

// @ts-ignore
new Vue({
    el: "#app",
    router,
    components: {
        App
    },
    template: "<app></app>"
});
