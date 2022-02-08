<template>
  <div
    class="flex h-64 flex-col items-center justify-center gap-3 rounded-lg bg-black bg-opacity-50 bg-cover bg-center bg-no-repeat px-14 text-center uppercase text-white bg-blend-darken md:h-52 lg:h-auto lg:max-h-[40rem]"
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
    <router-link
      :to="card.url"
      class="group hover:text-primaryPeach flex items-center gap-4 tracking-[5px] transition-colors duration-300"
    >
      View Projects
      <RightArrorIcon
        class="transition-transform duration-300 group-hover:translate-x-2"
      />
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
