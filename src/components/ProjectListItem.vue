<template>
  <BaseCard
    class="flex flex-col bg-lightPeach md:flex-row md:items-center lg:flex-col cursor-pointer group hover:bg-primaryPeach"
  >
    <div class="overflow-hidden md:w-1/2 lg:w-full">
      <img
        :src="imgUrl"
        alt="Project Image"
        class="w-full h-full object-cover transition-transform group-hover:scale-110 group-hover:duration-300 duration-500"
      />
    </div>
    <div
      class="text-center py-8 px-7 md:w-1/2 lg:w-auto transition-colors duration-300"
    >
      <h3 class="text-primaryPeach uppercase mb-5 group-hover:text-white">
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
