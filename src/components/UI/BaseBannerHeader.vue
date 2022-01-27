<template>
  <div
    class="bg-primaryPeach md:rounded-lg px-6 py-[6.5rem] -mx-6 text-white text-center relative before:bg-pages-intro before:md:bg-pages-intro-tablet before:lg:bg-call-to-action before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-no-repeat before:md:bg-cover before:bg-right-top before:md:bg-[right_-10rem_center] md:mx-0 -z-10 before:-z-10"
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
