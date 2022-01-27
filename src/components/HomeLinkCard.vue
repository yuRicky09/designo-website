<template>
  <div
    class="uppercase h-64 text-white text-center px-14 bg-no-repeat bg-cover bg-center bg-black bg-opacity-50 bg-blend-darken rounded-lg flex flex-col items-center justify-center gap-3 md:h-52 lg:h-auto lg:max-h-[40rem]"
    :class="[
      card.bgImgUrl.phone,
      card.bgImgUrl.tablet,
      card.bgImgUrl.desktop,
      card.bgImgUrl.desktopBig,
    ]"
  >
    <h2>
      {{ card.title }}
    </h2>
    <router-link :to="card.url" class="flex items-center gap-4 tracking-[5px]">
      View Projects
      <RightArrorIcon />
    </router-link>
  </div>
</template>

<script setup>
import RightArrorIcon from "@/assets/shared/desktop/icon-right-arrow.svg";

defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>
