import { ref } from "vue";

export function useImage() {
  const imgUrl = ref(null);

  function getImgUrl(imgPath, imgName) {
    // first parameter only accetp String or Template literals。 Can't use variable。
    imgUrl.value = new URL(
      `../assets/${imgPath}/${imgName}.jpg`,
      import.meta.url
    ).href;
  }

  return {
    imgUrl,
    getImgUrl,
  };
}
