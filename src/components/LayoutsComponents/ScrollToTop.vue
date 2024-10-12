<template>
  <div
    @click="scrollToTop"
    ref="scrollTopButton"
    class="tw-fixed tw-invisible tw-bottom-4 tw-right-4 tw-block text-white tw-z-50"
  >
    <q-icon
      name="arrow_upward"
      color=""
      class="tw-p-4 tw-rounded-2xl tw-bg-teal-600"
    />
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const scrollTopButton = ref(null);

const handleScroll = () => {
  if (window.scrollY > 0) {
    scrollTopButton.value.classList.remove('tw-invisible');
  } else {
    scrollTopButton.value.classList.add('tw-invisible');
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
