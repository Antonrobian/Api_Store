import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../Layouts/PrimaryLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/products",
          name: "products",
          component: () => import("../views/Products.vue"),
        },
        {
          path: "/profil",
          name: "Profil",
          component: () => import("../views/Profil.vue"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("../Layouts/FullLayout.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("../views/Login.vue"),
        },
        {
          path: "/NotFound",
          name: "NotFound",
          component: () => import("../views/NotFound.vue"),
        },
        {
          path: "/infoprofil",
          name: "Profil",
          component: () => import("../views/InfoProfil.vue"),
        },
        {
          path: "/halaman",
          name: "halaman",
          component: () => import("../views/HalamanProduct.vue"),
        },
        {
          path: "/search",
          name: "search",
          component: () => import("../views/searchView.vue"),
        },
      ],
    },
  ],
});

export default router;
