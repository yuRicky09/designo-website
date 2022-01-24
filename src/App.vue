<template>
  <div class="max-w-6xl mx-auto">
    <TheNavigation />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script setup>
import TheNavigation from "@/components/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
