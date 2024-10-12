<template>
  <div class="tw-flex tw-w-full tw-h-screen tw-justify-center tw-items-center">
    <div
      class="sm:tw-grid md:tw-hidden tw-w-full sm:tw-grid-cols-1 tw-h-screen"
    >
      <div
        class="t-center tw-bg-gradient-to-r tw-from-surface-light-5 tw-to-primary tw-h-32"
      >
        <img src="~/assets/logo.png" width="64" height="64" />
      </div>
      <auth-phone/>
    </div>

    <div class="tw-hidden md:tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
      <div
        class="t-center tw-bg-gradient-to-r tw-from-surface-light-5 tw-to-primary"
      >
        <img src="~/assets/logo.png" />
      </div>
      <div
        class="tw-flex tw-flex-col md:tw-w-3/4"
        style="place-content: center; place-self: center"
      >
        <auth-phone v-if="otpLogin"/>
        <auth-username v-if="!otpLogin"/>
        <div class="tw-mx-10 tw-mt-2 tw-cursor-pointer hover:tw-text-success-15" @click="()=>{otpLogin = !otpLogin}">
          {{otpLogin ? 'ورود با نام کاربری':'ورود با شماره موبایل'}}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AuthPhone from 'src/ composables/auth/authPhone.vue';
import { ref } from 'vue';
import AuthUsername from 'src/ composables/auth/authUsername.vue';
const otpLogin = ref(true)
defineOptions({
  layout: 'empty',
});
</script>
