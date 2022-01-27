<template>
  <div>
    <BaseBannerHeader
      title="Web design"
      description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
    />
    <ProjectList :project-list="webDesignProjects" />

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

const webDesignProjects = [
  {
    imgName: "image-express.jpg",
    title: "Express",
    description: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    imgName: "image-transfer.jpg",
    title: "Transfer",
    description:
      "Site for low-cost money transfers and sending money within seconds",
  },
  {
    imgName: "image-photon.jpg",
    title: "Photon",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    imgName: "image-builder.jpg",
    title: "Builder",
    description:
      "Connects users with local contractors based on their location",
  },
  {
    imgName: "image-blogr.jpg",
    title: "Blogr",
    description:
      "Blogr is a platform for creating an online blog or publication",
  },
  {
    imgName: "image-camp.jpg",
    title: "Camp",
    description:
      "Get expert training in coding, data, design, and digital marketing",
  },
];

provide("projectType", "web-design");

const { appDesignLink, graphicDesignLink } = inject("linksContent");
const linksCards = [appDesignLink, graphicDesignLink];
</script>
