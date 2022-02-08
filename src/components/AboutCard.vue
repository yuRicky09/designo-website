<template>
  <div
    class="-mx-6 flex flex-col items-center overflow-hidden sm:mx-20 md:mx-0 md:mb-28 md:rounded-lg lg:mb-32 xl:mb-40 xl:flex-row"
    :class="cardCustomStyle.bgColor"
  >
    <img :src="imgUrl" :alt="card.title" class="h-full w-full object-cover" />
    <div
      class="relative px-6 py-20 text-center before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-no-repeat before:opacity-20 md:px-16 lg:flex lg:flex-col lg:items-center lg:justify-center lg:self-stretch lg:px-20 lg:text-left xl:px-24"
      :class="[cardCustomStyle.bgImg, cardItemOrder]"
    >
      <h2 class="relative z-10 mb-6" :class="cardCustomStyle.titleColor">
        {{ card.title }}
      </h2>
      <p class="relative z-10" :class="cardCustomStyle.textColor">
        {{ card.description.paragraphOne }}
      </p>
      <br v-if="card.description.paragraphTwo" />
      <p class="relative z-10">{{ card.description.paragraphTwo }}</p>
    </div>
  </div>
</template>

<script setup>
import { useImage } from "@/composables/useImage";
import { onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
  cardCustomStyle: {
    type: Object,
    default() {
      return {
        titleColor: "text-primaryPeach",
        textColor: "text-darkGray",
        bgImg:
          "before:bg-pages-intro before:bg-cover before:-scale-100 before:bg-right-top md:before:bg-[right_3rem_top_2rem] xl:before:bg-[right_-20rem_bottom_3rem]",
        bgColor: "bg-lightPeach",
      };
    },
  },
  cardItemOrder: {
    type: String,
    default: "order-0",
  },
});

const { imgUrl, getImgUrl } = useImage();
const desktopWidth = 1280;
const tabletWidth = 768;

// check viewport width, set suitable image size
function setImgUrl() {
  const viewportWidth = getViewportWidth();
  const imgPath = getImgPath(viewportWidth);
  getImgUrl(imgPath, props.card.imgName);
}

function getViewportWidth() {
  return window.innerWidth;
}

function getImgPath(viewportWidth) {
  let imgPath;

  if (viewportWidth >= desktopWidth) {
    imgPath = `about/desktop`;
  } else if (viewportWidth >= tabletWidth) {
    imgPath = `about/tablet`;
  } else {
    imgPath = `about/mobile`;
  }

  return imgPath;
}

setImgUrl();

onMounted(() => window.addEventListener("resize", setImgUrl));
onBeforeUnmount(() => window.removeEventListener("resize", setImgUrl));
</script>
