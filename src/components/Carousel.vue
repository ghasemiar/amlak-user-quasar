<template>
  <div class="tw-relative tw-w-full tw-overflow-hidden tw-bg-gray-200">
    <div
      class="tw-flex tw-transition-transform tw-duration-500 tw-ease-in-out"
      :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="tw-min-w-full tw-flex-shrink-0 tw-flex tw-justify-center tw-items-center tw-bg-no-repeat tw-bg-cover tw-bg-center"
        :style="{ backgroundImage: `url(${slide})` }"
      >
        <slot :slide="slide"></slot>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button
      class="tw-absolute tw-top-1/2 tw-left-0 tw-transform tw--translate-y-1/2 tw-bg-gray-800 tw-text-white tw-px-2 tw-py-1 tw-opacity-75 tw-hover:tw-opacity-100"
      @click="prev"
    >
      ‹
    </button>
    <button
      class="tw-absolute tw-top-1/2 tw-right-0 tw-transform tw--translate-y-1/2 tw-bg-gray-800 tw-text-white tw-px-2 tw-py-1 tw-opacity-75 tw-hover:tw-opacity-100"
      @click="next"
    >
      ›
    </button>

    <!-- Pagination Dots -->
    <div
      class="tw-absolute tw-bottom-0 tw-left-1/2 tw-transform tw--translate-x-1/2 tw-space-x-2 tw-py-2"
    >
      <span
        v-for="(slide, index) in slides"
        :key="index"
        class="tw-inline-block tw-w-3 tw-h-3 tw-bg-white tw-rounded-full tw-cursor-pointer"
        :class="{ 'tw-bg-gray-800': index === activeIndex }"
        @click="setActive(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

const activeIndex = ref(0);

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % props.slides.length;
};

const prev = () => {
  activeIndex.value =
    (activeIndex.value - 1 + props.slides.length) % props.slides.length;
};

const setActive = (index) => {
  activeIndex.value = index;
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
