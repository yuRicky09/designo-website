<template>
  <div class="-mx-6 md:mx-0 md:flex md:flex-col md:gap-6 xl:flex-row">
    <div
      :id="mapId"
      class="h-[20rem] md:rounded-lg xl:h-auto xl:w-[22rem]"
      :class="props.itemOrder"
    ></div>

    <div
      class="bg-lightPeach before:bg-pattern-hero-about-mobile md:before:bg-pages-intro-tablet relative flex flex-col items-center px-6 py-20 text-center before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-top before:bg-no-repeat before:opacity-20 md:items-start md:rounded-lg md:px-20 md:text-left md:before:bg-[top_3rem_left_-20rem] xl:flex-1"
    >
      <h2 class="text-primaryPeach mb-4 md:mb-6">
        {{ office.location }}
      </h2>

      <div class="md:flex md:flex-row md:gap-20">
        <div class="mb-4 flex flex-col gap-1">
          <h3 class="font-bold tracking-normal">{{ office.name }}</h3>
          <p>{{ office.address.street }}</p>
          <p>{{ office.address.state }}</p>
        </div>

        <div class="flex flex-col gap-1">
          <h3 class="font-bold tracking-normal">Contact</h3>
          <p>P : {{ office.phone }}</p>
          <p>M : {{ office.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { onMounted } from "vue";

const props = defineProps({
  office: {
    type: Object,
    required: true,
  },
  mapId: {
    type: String,
    required: true,
  },
  itemOrder: {
    type: String,
    default: "",
  },
});

onMounted(() => {
  mapboxgl.accessToken = import.meta.env.VITE_MAP_BOX_KEY;
  const map = new mapboxgl.Map({
    container: props.mapId,
    style: "mapbox://styles/mapbox/streets-v11",
    center: props.office.coordinate,
    zoom: 13,
  });

  new mapboxgl.Marker().setLngLat(props.office.coordinate).addTo(map);
});
</script>
