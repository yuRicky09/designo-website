<template>
  <BaseCard
    class="bg-lightPeach group hover:bg-primaryPeach flex cursor-pointer flex-col md:flex-row md:items-center lg:flex-col"
  >
    <div class="overflow-hidden md:w-1/2 lg:w-full">
      <img
        :src="imgUrl"
        alt="Project Image"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:duration-300"
      />
    </div>
    <div
      class="py-8 px-7 text-center transition-colors duration-300 md:w-1/2 lg:w-auto"
    >
      <h3 class="text-primaryPeach mb-5 uppercase group-hover:text-white">
        {{ project.title }}
      </h3>
      <p class="group-hover:text-white">{{ project.description }}</p>
    </div>
  </BaseCard>
</template>

<script setup>
import { inject } from "vue";
import BaseCard from "@/components/UI/BaseCard.vue";
import { useImage } from "@/composables/useImage";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

// Dynamic import project's image
const imgFile = inject("imgFileName");
const imgPath = `${imgFile}/desktop`;
const { imgUrl, getImgUrl } = useImage();

getImgUrl(imgPath, props.project.imgName);
</script>
