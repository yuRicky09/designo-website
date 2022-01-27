import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    meta: {
      title: "Home | Designo",
    },
    component: Home,
  },
  {
    name: "AppDesign",
    path: "/design/app",
    meta: {
      title: "App Design | Designo",
    },
    component: () => import("@/views/AppDesign.vue"),
  },
  {
    name: "WebDesign",
    path: "/design/web",
    meta: {
      title: "Web Design | Designo",
    },
    component: () => import("@/views/WebDesign.vue"),
  },
  {
    name: "GraphicDesign",
    path: "/design/graphic",
    meta: {
      title: "Graphic Design | Designo",
    },
    component: () => import("@/views/GraphicDesign.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_, _2, savedPosition) {
    return savedPosition ? savedPosition : { top: 0 };
  },
});

export default router;
