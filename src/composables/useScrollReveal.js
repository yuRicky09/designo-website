import ScrollReveal from "scrollreveal";
import { onMounted, onBeforeUnmount } from "vue";

export function useScrollReveal() {
  function setScrollReveal(target, option) {
    onMounted(() => {
      ScrollReveal().reveal(target, option);
    });
  }

  function removeScrollReveal(target) {
    onBeforeUnmount(() => ScrollReveal().clean(target));
  }

  return {
    setScrollReveal,
    removeScrollReveal,
  };
}
