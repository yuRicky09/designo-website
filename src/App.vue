<template>
  <TheNavigation />
  <div class="max-w-6xl mx-auto px-6 md:px-10">
    <router-view></router-view>
    <BaseBannerFooter v-if="route.name !== 'Contack'" />
  </div>
  <TheFooter />
</template>

<script setup>
import TheNavigation from "@/components/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
import BaseBannerFooter from "@/components/UI/BaseBannerFooter.vue";
import { provide } from "vue";
import { useRoute } from "vue-router";

const linksContent = {
  webDesignLink: {
    title: "Web Design",
    bgImgUrl: {
      phone: "bg-web-design",
      tablet: "md:bg-web-design-tablet",
      desktop: "lg:bg-web-design-desktop",
    },
    url: { name: "WebDesign" },
  },
  graphicDesignLink: {
    title: "Graphic Design",
    bgImgUrl: {
      phone: "bg-graphic-design",
      tablet: "md:bg-graphic-design-tablet",
      desktop: "lg:bg-graphic-design-desktop",
      desktopBig: "lg:bg-graphic-design-desktop-large",
    },
    url: { name: "GraphicDesign" },
  },
  appDesignLink: {
    title: "App Design",
    bgImgUrl: {
      phone: "bg-app-design",
      tablet: "md:bg-app-design-tablet",
      desktop: "lg:bg-app-design-desktop",
    },
    url: { name: "AppDesign" },
  },
};

provide("linksContent", linksContent);

const route = useRoute();
</script>
