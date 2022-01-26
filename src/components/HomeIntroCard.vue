<template>
  <div
    class="flex flex-col gap-5 items-center text-center md:flex-row md:text-left md:gap-12 xl:flex-col xl:text-center"
  >
    <div
      class="relative before:bg-[url('@/assets/shared/desktop/bg-pattern-small-circle.svg')] before:bg-no-repeat before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-[-1]"
      :class="[card.bgRotateDeg]"
    >
      <img
        :src="card.imgUrl"
        alt="Introduction Image"
        class="w-[12.5rem] max-w-none"
      />
    </div>

    <div class="flex flex-col gap-5 items-center">
      <h3 class="uppercase md:self-start xl:self-center">{{ card.title }}</h3>
      <p>{{ card.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>
