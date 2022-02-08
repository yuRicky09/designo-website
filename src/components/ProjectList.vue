<template>
  <div
    class="grid gap-10 my-24 md:my-28 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3"
  >
    <ProjectListItem
      v-for="project in projectList"
      :key="project.title"
      :project="project"
      class="project-list load-hidden"
    />
  </div>
</template>

<script setup>
import ProjectListItem from "@/components/ProjectListItem.vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

defineProps({
  projectList: {
    type: Array,
    required: true,
  },
});

const { setScrollReveal, removeScrollReveal } = useScrollReveal();

setScrollReveal(".project-list", {
  origin: "bottom",
  distance: "100px",
  duration: 500,
  easing: "ease-out",
});

removeScrollReveal(".project-list");
</script>
