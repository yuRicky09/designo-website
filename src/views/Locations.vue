<template>
  <div class="flex flex-col gap-10 md:gap-28">
    <OfficeLocation
      v-for="(office, index) in offices"
      :key="office.name"
      :office="office"
      :map-id="`map${index + 1}`"
      :item-order="index % 2 === 0 ? 'lg:order-1' : ''"
    />
  </div>
</template>

<script setup>
import OfficeLocation from "@/components/OfficeLocation.vue";

const offices = [
  {
    name: "Designo Central Office",
    location: "Canada",
    address: {
      street: "3886 Wellington Street",
      state: "Toronto, Ontario M9C 3J5",
    },
    phone: "+1 253-863-8967",
    email: "contact@designo.co",
    coordinate: [-79.394616, 43.644027],
  },
  {
    name: "Designo AU Office",
    location: "Australia",
    address: {
      street: "19 Balonne Street",
      state: "New South Wales 2443",
    },
    phone: "(02) 6720 9092",
    email: "contact@designo.au",
    coordinate: [149.788422, -30.329076],
  },
  {
    name: "Designo UK Office",
    location: "United Kingdom",
    address: {
      street: "13 Colorado Way",
      state: "Rhyd-y-fro SA8 9GA",
    },
    phone: "078 3115 1400",
    email: "contact@designo.uk",
    coordinate: [-3.866062, 51.740413],
  },
];
</script>
