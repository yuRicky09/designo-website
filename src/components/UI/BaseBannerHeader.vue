<template>
  <div
    class="bg-primaryPeach before:bg-pages-intro before:md:bg-pages-intro-tablet before:lg:bg-call-to-action relative -z-10 -mx-6 px-6 py-[6.5rem] text-center text-white before:absolute before:top-0 before:left-0 before:-z-10 before:h-full before:w-full before:bg-right-top before:bg-no-repeat md:mx-0 md:rounded-lg before:md:bg-cover before:md:bg-[right_-10rem_center]"
    :class="bgPositionWhenDesktop"
  >
    <h1 class="mb-6">{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bgPositionWhenDesktop: {
    type: String,
    default: "before:lg:bg-[center] before:lg:-scale-y-100",
  },
});
</script>
