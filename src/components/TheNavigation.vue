<template>
  <header
    class="flex justify-between items-center py-9 relative z-50 bg-white uppercase -mx-6 px-6 md:mx-0 md:px-0 md:py-16"
  >
    <router-link :to="{ name: 'Home' }">
      <img
        src="@/assets/shared/desktop/logo-dark.png"
        alt="Logo"
        class="w-[200px]"
      />
    </router-link>

    <!-- desktop-nav -->
    <div class="hidden md:block">
      <ul class="text-darkGray flex items-center gap-8">
        <li>
          <router-link :to="{ name: 'About' }" class="nav-link"
            >Our Company</router-link
          >
        </li>
        <li><router-link to="#" class="nav-link">Locations</router-link></li>
        <li><router-link to="#" class="nav-link">Contact</router-link></li>
      </ul>
    </div>

    <!-- mobile-nav -->
    <div class="md:hidden">
      <HamburgerIcon
        v-show="!mobileNavIsShow"
        @click="mobileNavIsShow = true"
      />
      <CloseIcon v-show="mobileNavIsShow" @click="mobileNavIsShow = false" />
    </div>
    <transition name="mobile-nav">
      <div
        v-show="mobileNavIsShow"
        class="absolute z-40 top-full left-0 w-full origin-top-right md:hidden"
      >
        <ul class="text-white px-6 py-12 bg-primaryBlack text-2xl">
          <li class="mb-4">
            <router-link :to="{ name: 'About' }">Our Company</router-link>
          </li>
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
      class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-10 md:hidden"
      @click="mobileNavIsShow = false"
    ></div>
  </teleport>
</template>

<script setup>
import CloseIcon from "@/assets/shared/mobile/icon-close.svg";
import HamburgerIcon from "@/assets/shared/mobile/icon-hamburger.svg";
import { ref } from "vue";

const mobileNavIsShow = ref(false);
</script>

<style lang="postcss" scoped>
.mobile-nav-enter-active {
  @apply animate-popUp;
}

.mobile-nav-leave-active {
  @apply animate-popUpReverse;
}
</style>
