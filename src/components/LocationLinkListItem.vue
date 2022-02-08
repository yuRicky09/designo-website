<template>
  <div class="flex flex-col items-center uppercase">
    <div
      class="before:bg-small-circle relative mb-12 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-contain before:bg-no-repeat"
      :class="link.bgRotateDeg"
    >
      <img :src="link.imgUrl" :alt="link.locationName" />
    </div>
    <h3 class="mb-8">{{ link.locationName }}</h3>
    <router-link class="btn btn-darker" :to="{ name: 'Locations' }"
      >See Loaction</router-link
    >
  </div>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    required: true,
  },
});
</script>
