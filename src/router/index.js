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
  {
    name: "About",
    path: "/about",
    meta: {
      title: "About | Designo",
    },
    component: () => import("@/views/About.vue"),
  },
  {
    name: "Contact",
    path: "/contact",
    meta: {
      title: "Contact | Designo",
    },
    component: () => import("@/views/Contact.vue"),
  },
  {
    name: "Locations",
    path: "/Locations",
    meta: {
      title: "Locations | Designo",
    },
    component: () => import("@/views/Locations.vue"),
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
