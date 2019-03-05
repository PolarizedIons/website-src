import 'normalize.css';
import Vue from 'vue';


// @ts-ignore
import App from '../components/App.vue';

// @ts-ignore
new Vue({
    el: "#app",
    components: {
        App
    },
    template: "<app></app>"
});
