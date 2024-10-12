<template>
  <q-header class="tw-bg-primary-100 tw-border tw-border-white">
    <q-toolbar class="tw-p-3">
      <q-toolbar-title
        class="tw-flex tw-mt-2 tw-font-bold tw-text-primary-0 tw-text-lg tw-opacity-80 hover:tw-opacity-100"
      >
        <div class="tw-size-5 tw-mx-1">
          <img class="" src="../../assets/ahromlogoBlack.png" />
        </div>

        <router-link :to="{ name: 'home' }"
        >فناوری اهرم</router-link
        ></q-toolbar-title
      >

      <q-btn
        dense
        flat
        round
        icon="menu"
        class="tw-block lg:tw-hidden tw-text-primary-0"
        @click="() => (leftDrawerOpen = !leftDrawerOpen)"
      />
      <div class="lg:tw-flex tw-hidden tw-items-center tw-gap-10">
        <ul
          class="tw-font-medium tw-flex tw-gap-block-in tw-flex-col md:tw-flex-row"
        >
          <li
            v-for="(item, i) in items"
            :key="i"
            class="tw-text-primary-0 hover:tw-text-primary-30 tw-flex tw-items-center tw-p-2 tw-rounded-lg hover:tw-bg-teal-50 tw-text-[16px]"
          >
            <q-icon :name="item.icon" />
            <router-link
              :to="{ name: item.to }"
              class="tw-block tw-px-3 tw-rounded"
              aria-current="page"
            >{{ item.name }}</router-link
            >
          </li>
        </ul>

        <q-btn
          v-if="!isAuthenticated()"
          flat
          :to="{name:'login'}"
          class="tw-px-4 tw-py-2 tw-text-primary-100 tw-bg-primary-45 tw-border tw-rounded-lg tw-border-teal-700 hover:tw-bg-teal-800"
          label="ورود / ثبت نام"
        />
        <q-btn
          v-else
          flat
          class="tw-px-4 tw-py-2 tw-text-primary-100 tw-bg-primary-45 tw-border tw-rounded-lg tw-border-teal-700 hover:tw-bg-teal-800"
          label="پنل کاربری"
        />
      </div>
    </q-toolbar>
  </q-header>
  <div class="lg:tw-hidden tw-block">
    <q-drawer class="tw-bg-white tw-mt-5" v-model="leftDrawerOpen">
      <ul class="tw-font-medium">
        <li v-for="(item, i) in items" :key="i" class="tw-w-full">
          <div class="tw-flex tw-bg-white-200 tw-p-4 tw-m-2 tw-rounded-xl">
            <q-icon :name="item.icon" />
            <router-link
              :to="{ name: item.to }"
              class="tw-block tw-px-3 tw-rounded"
              aria-current="page"
            >{{ item.name }}</router-link
            >
          </div>
        </li>
      </ul>
    </q-drawer>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from 'stores/auth.store';
const {isAuthenticated} = useAuthStore()
const items = [
  {
    name: 'آگهی ها',
    icon: 'receipt_long',
    to: 'advertises',
  },
  {
    name: 'مقالات',
    icon: 'description',
    to: '',
  },
  {
    name: 'درباره ما',
    icon: 'import_contacts',
    to: '',
  },
  {
    name: 'ارتباط با ما',
    icon: 'phone_in_talk',
    to: '',
  },
];
const leftDrawerOpen = ref(false);
</script>
