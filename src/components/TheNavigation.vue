<template>
  <header
    class="flex justify-between items-center py-9 px-6 relative z-50 bg-white"
  >
    <div>
      <img
        src="@/assets/shared/desktop/logo-dark.png"
        alt="Logo"
        class="w-[200px]"
      />
    </div>
    <div>
      <HamburgerIcon
        v-show="!mobileNavIsShow"
        @click="mobileNavIsShow = true"
      />
      <CloseIcon v-show="mobileNavIsShow" @click="mobileNavIsShow = false" />
    </div>

    <!-- mobile-nav -->
    <transition name="mobile-nav">
      <div
        v-show="mobileNavIsShow"
        class="absolute z-40 top-full left-0 w-full origin-top-right"
      >
        <ul class="text-white px-6 py-12 bg-primaryBlack text-2xl">
          <li class="mb-4"><router-link to="#">Our Company</router-link></li>
          <li class="mb-4"><router-link to="#">Locations</router-link></li>
          <li><router-link to="#">Contact</router-link></li>
        </ul>
      </div>
    </transition>
  </header>
  <!-- overlay -->
  <teleport to="body">
    <div
      v-show="mobileNavIsShow"
      class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-10"
      @click="mobileNavIsShow = false"
    ></div>
  </teleport>
</template>

<script setup>
import CloseIcon from "@/assets/shared/mobile/icon-close.svg";
import HamburgerIcon from "@/assets/shared/mobile/icon-hamburger.svg";
import { ref } from "vue";

const mobileNavIsShow = ref(true);
</script>

<style lang="postcss" scoped>
.mobile-nav-enter-active {
  @apply animate-popUp;
}

.mobile-nav-leave-active {
  @apply animate-popUpReverse;
}
</style>
