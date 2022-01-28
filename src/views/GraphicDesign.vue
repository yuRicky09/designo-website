<template>
  <div>
    <BaseBannerHeader
      title="Graphic design"
      description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      bg-position-when-desktop="before:lg:bg-[center_right_2rem]"
    />
    <ProjectList :project-list="graphicDesignProjects" />

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
import BaseBannerHeader from "@/components/UI/BaseBannerHeader.vue";
import HomeLinkCard from "@/components/HomeLinkCard.vue";
import { provide, inject } from "vue";

const graphicDesignProjects = [
  {
    imgName: "image-change.jpg",
    title: "Tim Brown",
    description: "A book cover designed for Tim Brown’s new release, ‘Change’",
  },
  {
    imgName: "image-boxed-water.jpg",
    title: "Boxed water",
    description: "A simple packaging concept made for Boxed Water",
  },
  {
    imgName: "image-science.jpg",
    title: "Science!",
    description: "A poster made in collaboration with the Federal Art Project",
  },
];

provide("imgFileName", "graphic-design");

const { webDesignLink, appDesignLink } = inject("linksContent");
const linksCards = [appDesignLink, webDesignLink];
</script>
