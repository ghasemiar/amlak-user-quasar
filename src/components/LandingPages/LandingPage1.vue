<template>
  <header-component />

  <div
    class="tw-container tw-mx-auto xl:tw-px-[150px] lg:tw-px-[100px] md:tw-px-[50px] tw-px-[10px]"
  >
    <special-advertise />
  </div>
  <div class="tw-bg-white tw-py-10">
    <div
      class="tw-container tw-bg-white tw-mx-auto xl:tw-px-[150px] lg:tw-px-[100px] md:tw-px-[50px] tw-px-[10px]"
    >
      <blogs-component />
    </div>
  </div>
</template>

<script setup lang="ts">
import SpecialAdvertise from 'components/LandingPages/LandingPageComponents1/SpecialAdvertise.vue';
import HeaderComponent from 'components/LandingPages/LandingPageComponents1/HeaderComponent.vue';
import BlogsComponent from 'components/LandingPages/LandingPageComponents1/BlogsComponent.vue';
</script>
