<template>
  <div>
    <div
      class="bg-primaryPeach relative -mx-[1.5rem] overflow-hidden bg-[url('@/assets/home/desktop/bg-pattern-hero-home.svg')] bg-no-repeat px-4 pt-16 pb-[26rem] sm:px-16 md:mx-0 md:rounded-lg md:bg-[center_right_-8rem] md:px-24 md:pb-[28rem] lg:bg-[right] lg:pb-36 lg:pt-36"
    >
      <div
        class="flex flex-col items-center text-center text-white lg:w-[55%] lg:items-start lg:text-left"
      >
        <h1 class="mb-6">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p class="mb-5">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <router-link class="btn" :to="{ name: 'About' }"
          >Learn more</router-link
        >
      </div>

      <img
        src="@/assets/home/desktop/image-hero-phone.png"
        alt="Phone Image"
        class="absolute left-1/2 top-[calc(50%_+_40px)] -translate-x-1/2 scale-[1.5] md:top-[35%] md:scale-100 lg:left-3/4 lg:top-[calc(0%_-_1.5rem)]"
      />
    </div>

    <section
      class="my-32 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-2 lg:items-stretch lg:gap-7"
    >
      <NavigationLinkCard
        v-for="(card, index) in linkCards"
        :key="card.title"
        :card="card"
        :class="{
          [gridItemOneStyle]: index === 0,
        }"
      />
    </section>

    <section class="my-12 flex flex-col gap-20 xl:mt-40 xl:flex-row">
      <HomeIntroCard
        v-for="card in introCards"
        :key="card.title"
        :card="card"
      />
    </section>
  </div>
</template>

<script setup>
import NavigationLinkCard from "@/components/NavigationLinkCard.vue";
import HomeIntroCard from "@/components/HomeIntroCard.vue";
import imgPassionate from "@/assets/home/desktop/illustration-passionate.svg?url";
import imgResourceful from "@/assets/home/desktop/illustration-resourceful.svg?url";
import imgFriendly from "@/assets/home/desktop/illustration-friendly.svg?url";
import { inject } from "vue";

const { webDesignLink, graphicDesignLink, appDesignLink } =
  inject("linksContent");
const linkCards = [webDesignLink, appDesignLink, graphicDesignLink];
const introCards = [
  {
    title: "Passionate",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We mergeart, design, and technology into exciting new solutions.",
    imgUrl: imgPassionate,
    bgRotateDeg: "before:rotate-[0deg]",
  },
  {
    title: "Resourceful",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customercollaboration. It guarantees superior results that fulfill our clients’ needs.",
    imgUrl: imgResourceful,
    bgRotateDeg: "before:rotate-[270deg]",
  },
  {
    title: "Friendly",
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and westrive to give them the best experience a company can provide.",
    imgUrl: imgFriendly,
    bgRotateDeg: "before:rotate-[90deg]",
  },
];

const gridItemOneStyle =
  "lg:row-start-1 lg:row-end-3 lg:h-auto lg:py-[17rem] lg:px-[7rem]";
</script>
