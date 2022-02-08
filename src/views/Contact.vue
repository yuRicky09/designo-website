<template>
  <div>
    <div
      class="bg-primaryPeach before:bg-hero-contact-mobile md:before:bg-hero-contact-desktop relative z-0 -mx-6 flex flex-col gap-12 py-20 px-6 text-center text-white before:absolute before:top-0 before:left-0 before:-z-10 before:h-full before:w-full before:bg-[top_0_left_-6.5rem] before:bg-no-repeat md:mx-0 md:rounded-lg md:px-14 md:text-left md:before:bg-[top_-8rem_left_-8rem] xl:flex-row xl:items-center xl:py-6 xl:before:bg-[top_-4rem_left_-4rem]"
    >
      <div
        class="flex flex-col items-center gap-6 xl:w-1/2 xl:items-start xl:gap-10 xl:p-4 xl:text-left"
      >
        <h1 class="md:self-start">Contact us</h1>
        <p class="xl:mb-24">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>

      <ContactForm class="xl:w-1/2" />
    </div>

    <LocationLinkList />
  </div>
</template>

<script setup>
import ContactForm from "@/components/ContactForm.vue";
import LocationLinkList from "@/components/LocationLinkList.vue";
</script>
