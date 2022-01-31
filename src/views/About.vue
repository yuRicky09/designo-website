<template>
  <div>
    <AboutCard
      :card="aboutCards[0]"
      :card-custom-style="cardCustomStyle"
      :card-item-order="'xl:-order-1'"
    />
    <AboutCard :card="aboutCards[1]" />
    <LocationLinkList />
    <AboutCard :card="aboutCards[2]" :card-item-order="'xl:-order-1'" />
  </div>
</template>

<script setup>
import AboutCard from "@/components/AboutCard.vue";
import LocationLinkList from "@/components/LocationLinkList.vue";

const aboutCards = [
  {
    title: "About us",
    description: {
      paragraphOne:
        "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.",
      paragraphTwo: null,
    },
    imgName: "image-about-hero",
  },
  {
    title: "World-class talent",
    description: {
      paragraphOne:
        "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updatingour skills in a myriad of platforms.",
      paragraphTwo:
        "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
    },
    imgName: "image-world-class-talent",
  },
  {
    title: "The real deal",
    description: {
      paragraphOne:
        "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to everyopportunity. We make design and technology more accessible and give you tools to measure success.",
      paragraphTwo:
        " We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
    },
    imgName: "image-real-deal",
  },
];

const cardCustomStyle = {
  titleColor: "text-white",
  textColor: "text-white",
  bgImg:
    "before:bg-pattern-hero-about-mobile  before:bg-[right_top_-8rem] md:before:bg-pattern-hero-about-desktop md:before:bg-[right_12rem_top_-25rem]  xl:before:bg-[right_-20rem_bottom_3rem] xl:before:bg-right-bottom",
  bgColor: "bg-primaryPeach",
};
</script>
