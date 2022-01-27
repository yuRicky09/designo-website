<template>
  <div>
    <BaseBannerHeader
      title="App design"
      description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      bg-position-when-desktop="before:lg:bg-[center_right_12rem]"
    />
    <ProjectList :project-list="appDesignProjects" />

    <div
      class="flex flex-col gap-6 -mb-4 lg:flex-row lg:gap-8 lg:justify-center"
    >
      <HomeLinkCard
        v-for="card in linksCards"
        :key="card.title"
        :card="card"
        class="lg:py-28 lg:px-22 lg:w-1/2"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectList from "@/components/ProjectList.vue";
import { provide, inject } from "vue";
import BaseBannerHeader from "@/components/UI/BaseBannerHeader.vue";
import HomeLinkCard from "@/components/HomeLinkCard.vue";

const appDesignProjects = [
  {
    imgName: "image-airfilter.jpg",
    title: "Airfilter",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    imgName: "image-eyecam.jpg",
    title: "Eyecam",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    imgName: "image-faceit.jpg",
    title: "Faceit",
    description:
      "Get to meet your favorite internet superstar with the faceit app",
  },
  {
    imgName: "image-todo.jpg",
    title: "Todo",
    description: "A todo app that features cloud sync with light and dark mode",
  },
  {
    imgName: "image-loopstudios.jpg",
    title: "Loopstudios",
    description: "A VR experience app made for Loopstudios",
  },
];

provide("projectType", "app-design");

const { webDesignLink, graphicDesignLink } = inject("linksContent");
const linksCards = [webDesignLink, graphicDesignLink];
</script>
