import { ref } from "vue";

export function useImage() {
  const imgUrl = ref(null);

  function getImgUrl(imgPath) {
    imgUrl.value = new URL(imgPath, import.meta.url).href;
  }

  return {
    imgUrl,
    getImgUrl,
  };
}
