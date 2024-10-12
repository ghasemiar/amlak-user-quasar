<template>
  <gsap2 />
  <header-component2 />

  <div class="containerAds tw-p-10">
    <special-advertise2 />
  </div>

  <div class="containerBlogs tw-py-10">
    <div
      class="tw-container tw-mx-auto xl:tw-px-[150px] lg:tw-px-[100px] md:tw-px-[50px] tw-px-[10px]"
    >
      <blogs-component2 />
    </div>
  </div>
  <mobile-gsap />
</template>
<script setup lang="ts">

import MobileGsap from 'components/GaspComponents/MobileGsap.vue';
import gsap2 from 'components/GaspComponents/gsap2.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import SpecialAdvertise2 from 'components/LandingPages/LandingPageComponents2/SpecialAdvertise2.vue';
import BlogsComponent2 from 'components/LandingPages/LandingPageComponents2/BlogsComponent2.vue';
import HeaderComponent2 from 'components/LandingPages/LandingPageComponents2/HeaderComponent2.vue';
</script>
<style scoped>
.containerAds {
  background-image: linear-gradient(
    180deg,
    #f4f0ce 0%,
    #ffffff 30%,
    #ffffff 150%
  );
}
.containerBlogs {
  background-image: linear-gradient(
    180deg,
    #ffffff 0%,
    #eeeeee 30%,
    #eeeeee 150%
  );
}
</style>
