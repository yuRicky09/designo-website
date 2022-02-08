<template>
  <div
    class="mx-auto max-w-[90rem] px-6 pt-40 pb-16 text-white md:px-10 lg:px-24 xl:px-40 xl:pt-52"
  >
    <div
      class="flex flex-col items-center justify-between text-center md:flex-row md:border-b-2 md:border-white md:border-opacity-10 md:pb-12"
    >
      <router-link :to="{ name: 'Home' }">
        <img
          src="@/assets/shared/desktop/logo-light.png"
          alt="Logo Image"
          class="w-52"
        />
      </router-link>
      <div class="my-6 h-[2px] w-full bg-white bg-opacity-10 md:hidden"></div>
      <div>
        <ul
          class="flex flex-col items-center gap-3 uppercase md:flex-row md:gap-10"
        >
          <li>
            <router-link
              :to="{ name: 'About' }"
              class="hover:text-primaryPeach transition-colors duration-200"
              >Our company</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Locations' }"
              class="hover:text-primaryPeach transition-colors duration-200"
              >Locations</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Contact' }"
              class="hover:text-primaryPeach transition-colors duration-200"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>

    <div
      class="mt-10 flex flex-col items-center gap-10 text-center md:flex-row md:gap-12 lg:gap-20 xl:gap-52"
    >
      <div class="opacity-50">
        <p class="font-bold">Designo Central Office</p>
        <p>3886 Wellington Street</p>
        <p>Toronto, Ontario M9C 3J5</p>
      </div>
      <div class="font-bold opacity-50">
        <p>Contact Us (Central Office)</p>
        <p>P : +1 253-863-8967</p>
        <p>M : contact@designo.co</p>
      </div>
      <div class="flex items-center gap-4 md:flex-1 md:justify-end md:self-end">
        <FacebookIcon class="icon" />
        <YoutubeIcon class="icon" />
        <TwitterIcon class="icon" />
        <PinterestIcon class="icon" />
        <InstagramIcon class="icon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import FacebookIcon from "@/assets/shared/desktop/icon-facebook.svg";
import InstagramIcon from "@/assets/shared/desktop/icon-instagram.svg";
import PinterestIcon from "@/assets/shared/desktop/icon-pinterest.svg";
import TwitterIcon from "@/assets/shared/desktop/icon-twitter.svg";
import YoutubeIcon from "@/assets/shared/desktop/icon-youtube.svg";
</script>
