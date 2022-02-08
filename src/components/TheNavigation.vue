<template>
  <header
    class="relative z-50 -mx-6 flex items-center justify-between bg-white py-9 px-6 uppercase md:mx-0 md:px-0 md:py-16"
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
        <li class="desktop-nav-link">
          <router-link :to="{ name: 'About' }" class="nav-link"
            >Our Company</router-link
          >
        </li>
        <li class="desktop-nav-link">
          <router-link :to="{ name: 'Locations' }" class="nav-link"
            >Locations</router-link
          >
        </li>
        <li class="desktop-nav-link">
          <router-link :to="{ name: 'Contact' }" class="nav-link"
            >Contact</router-link
          >
        </li>
      </ul>
    </div>

    <!-- mobile-nav -->
    <div class="md:hidden">
      <HamburgerIcon v-show="!mobileNavIsShow" @click="showMobileNav" />
      <CloseIcon v-show="mobileNavIsShow" @click="closeMobileNav" />
    </div>
    <Transition name="mobile-nav">
      <div
        v-show="mobileNavIsShow"
        class="absolute top-full left-0 z-40 w-full origin-top-right md:hidden"
      >
        <ul class="bg-primaryBlack px-6 py-12 text-2xl text-white">
          <li class="mb-4" @click="closeMobileNav">
            <router-link :to="{ name: 'About' }">Our Company</router-link>
          </li>
          <li class="mb-4" @click="closeMobileNav">
            <router-link :to="{ name: 'Locations' }">Locations</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Contact' }" @click="closeMobileNav"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </Transition>
  </header>
  <!-- overlay -->
  <teleport to="body">
    <div
      v-show="mobileNavIsShow"
      class="fixed top-0 left-0 z-10 h-full w-full bg-black bg-opacity-20 md:hidden"
      @click="mobileNavIsShow = false"
    ></div>
  </teleport>
</template>

<script setup>
import CloseIcon from "@/assets/shared/mobile/icon-close.svg";
import HamburgerIcon from "@/assets/shared/mobile/icon-hamburger.svg";
import { ref } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

const mobileNavIsShow = ref(false);
function showMobileNav() {
  mobileNavIsShow.value = true;
}

function closeMobileNav() {
  mobileNavIsShow.value = false;
}

const { setScrollReveal, removeScrollReveal } = useScrollReveal();

setScrollReveal(".desktop-nav-link", {
  duration: 500,
  easing: "ease-in-out",
  interval: 300,
});

removeScrollReveal(".desktop-nav-link");
</script>

<style lang="postcss" scoped>
.mobile-nav-enter-active {
  @apply animate-popUp;
}

.mobile-nav-leave-active {
  @apply animate-popUpReverse;
}
</style>
