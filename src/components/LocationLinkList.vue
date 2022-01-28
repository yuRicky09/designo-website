<template>
  <div
    class="flex gap-12 flex-col items-center my-28 lg:flex-row lg:justify-evenly xl:my-40"
  >
    <LocationLinkListItem
      v-for="link in locationLinks"
      :key="link.locationName"
      :link="link"
    />
  </div>
</template>

<script setup>
import LocationLinkListItem from "@/components/LocationLinkListItem.vue";
import imgCanada from "@/assets/shared/desktop/illustration-canada.svg?url";
import imgAustralia from "@/assets/shared/desktop/illustration-australia.svg?url";
import imgUnitedKingdom from "@/assets/shared/desktop/illustration-united-kingdom.svg?url";

const locationLinks = [
  {
    imgUrl: imgCanada,
    locationName: "Canada",
    bgRotateDeg: "before:rotate-[90deg]",
  },
  {
    imgUrl: imgAustralia,
    locationName: "Australia",
    bgRotateDeg: "before:rotate-[0deg]",
  },
  {
    imgUrl: imgUnitedKingdom,
    locationName: "United Kingdom",
    bgRotateDeg: "before:rotate-[270deg]",
  },
];
</script>
