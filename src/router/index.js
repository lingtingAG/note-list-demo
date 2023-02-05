import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/list",
      name: "list",
      component: () => import("../views/ListView/index.vue"),
    },
    {
      path: "/editor",
      name: "editor",
      component: () => import("../views/EditorView/index.vue"),
    },
  ],
});

export default router;
