<template>
  <div class="uppercase flex flex-col items-center">
    <div
      class="mb-12 relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-small-circle before:bg-no-repeat before:bg-contain"
      :class="link.bgRotateDeg"
    >
      <img :src="link.imgUrl" :alt="link.locationName" />
    </div>
    <h3 class="mb-8">{{ link.locationName }}</h3>
    <router-link class="btn btn-darker" to="#">See Loaction</router-link>
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
