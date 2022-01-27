<template>
  <div
    class="grid gap-10 my-24 md:my-28 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3"
  >
    <ProjectListItem
      v-for="project in projectList"
      :key="project.title"
      :project="project"
    />
  </div>
</template>

<script setup>
import ProjectListItem from "@/components/ProjectListItem.vue";

defineProps({
  projectList: {
    type: Array,
    required: true,
  },
});
</script>
