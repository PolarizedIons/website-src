import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: "/",
    name: "about",
    component: () => import("@/pages/About.vue"),
  },
  {
    path: "/skills",
    name: "skills",
    component: () => import("@/pages/Skills.vue"),
  },
  {
    path: "/socials",
    name: "socials",
    component: () => import("@/pages/Socials.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
