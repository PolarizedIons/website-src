import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Scrollspy from "vue2-scrollspy";

import CTA from './components/CTA.vue';
import SocialLinks from './components/SocialLinks.vue';
import QnAs from './components/QnAs.vue';


Vue.config.productionTip = false;

Vue.use(Scrollspy);

Vue.component('cta', CTA);
Vue.component('social-links', SocialLinks);
Vue.component('qnas', QnAs);

new Vue({
  data: {
    sections: {
      "Me": "cta",
      "Social": "social-links",
      "FAQ": "qnas",
    },
  },
  router,
  render: h => h(App)
}).$mount("#app");
