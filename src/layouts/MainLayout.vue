<template>
  <q-layout view="hhh lpR fFf" class="tw-bg-white">
    <scroll-to-top />
    <navbar />
    <q-page-container class="!tw-bg-white">
      <router-view />
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<script setup lang="ts">
import Navbar from 'components/LayoutsComponents/Navbar.vue';
import ScrollToTop from 'components/LayoutsComponents/ScrollToTop.vue';
import Footer from 'components/LayoutsComponents/Footer.vue';

defineOptions({
  name: 'MainLayout',
});
</script>
