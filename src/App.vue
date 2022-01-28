<template>
  <div
    class="relative max-w-[90rem] mx-auto px-6 md:px-10 lg:px-24 xl:px-40 xl:before:bg-pattern-leaf xl:before:absolute xl:before:top-[21rem] xl:before:left-0 xl:before:w-[1000px] xl:before:h-[594px] xl:before:-z-20 xl:after:bg-pattern-leaf xl:after:absolute xl:after:bottom-[2rem] xl:after:right-0 xl:after:w-[1000px] xl:after:h-[594px] xl:after:-z-20 xl:after:rotate-180"
    :class="showBgPattern"
  >
    <TheNavigation />
    <main>
      <router-view></router-view>
    </main>
    <BaseBannerFooter v-if="route.name !== 'Contack'" />
  </div>
  <div class="bg-primaryBlack">
    <TheFooter />
  </div>
</template>

<script setup>
import TheNavigation from "@/components/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
import BaseBannerFooter from "@/components/UI/BaseBannerFooter.vue";
import { provide, computed } from "vue";
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

const showBgPattern = computed(() => {
  if (
    route.name === "Home" ||
    route.name === "About" ||
    route.name === "Contact"
  ) {
    return "xl:after:block";
  } else {
    return "xl:after:hidden";
  }
});
</script>
