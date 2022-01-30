<template>
  <div>
    <div
      class="bg-primaryPeach z-0 relative py-20 -mx-6 px-6 flex flex-col before:absolute before:bg-hero-contact-mobile before:top-0 before:left-0 before:bg-no-repeat before:w-full before:h-full before:bg-[top_0_left_-6.5rem] before:-z-10 text-white text-center gap-12 md:mx-0 md:px-14 md:text-left md:before:bg-hero-contact-desktop md:before:bg-[top_-8rem_left_-8rem] md:rounded-lg xl:flex-row xl:items-center xl:py-6 xl:before:bg-[top_-4rem_left_-4rem]"
    >
      <div
        class="flex flex-col items-center gap-6 xl:w-1/2 xl:text-left xl:items-start xl:gap-10 xl:p-4"
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
