<template>
  <footer class="">
    <div class="tw-bg-[#f4f0ce] tw-text-black">
      <div
        class="tw-flex tw-justify-between tw-container tw-mx-auto xl:tw-px-[200px] lg:tw-px-[100px] md:tw-px-[50px] tw-px-[10px] tw-py-8"
      >
        <div>
          <h2 class="tw-text-3xl tw-font-bold">
            یک نماینده املاک و مستغلات شوید
          </h2>
          <div class="tw-text-xl tw-mt-2">
            ما فقط با بهترین شرکت ها در سراسر جهان همکاری می کنیم.
            <button
              class="tw-bg-teal-700 tw-h-sm tw-text-white tw-p-3 tw-m-2 tw-rounded-md"
            >
              اکنون ثبت نام کنید
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="tw-bg-teal-900 tw-text-white tw-py-[60px]">
      <div
        class="tw-grid xl:tw-grid-cols-4 tw-gap-4 tw-container tw-mx-auto xl:tw-px-[200px] lg:tw-px-[100px] md:tw-px-[50px] tw-px-[10px]"
      >
        <div>
          <h4 class="tw-text-xl tw-font-bold">درباره ما</h4>
          <q-separator dark class="tw-mt-2" />
          <div class="tw-mt-3">
            ما در حال ارزیابی مجدد نحوه خرید ، فروش و اجاره هستیم. اکنون ورود به
            مکانی که دوست دارید راحت تر است. بیایید با هم این کار را انجام دهیم.
          </div>
        </div>
        <div>
          <h4 class="tw-text-xl tw-font-bold">لینک های سریع</h4>
          <q-separator dark class="tw-mt-2" />
          <ul
            class="tw-font-medium tw-grid tw-gap-1 tw-flex-col md:tw-flex-row"
          >
            <li
              v-for="(item, i) in items"
              :key="i"
              class="tw-flex tw-items-center tw-p-2 tw-rounded-lg tw-text-[16px]"
            >
              <q-icon :name="item.icon" color="white" />
              <router-link
                :to="{ name: item.to }"
                class="tw-block tw-px-3 tw-text-white tw-rounded"
                aria-current="page"
              >{{ item.name }}</router-link
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="tw-text-xl tw-font-bold">تماس باما</h4>
          <q-separator dark class="tw-mt-2" />
          <ul
            class="tw-font-medium tw-grid tw-gap-1 tw-flex-col md:tw-flex-row"
          >
            <li
              v-for="(item, i) in footerContact"
              :key="i"
              class="tw-flex tw-items-center tw-p-2 tw-rounded-lg tw-text-[16px]"
            >
              <q-icon :name="item.icon" color="white" />
              <a
                :href="item.url"
                class="tw-block tw-px-3 tw-text-white tw-rounded"
                aria-current="page"
              >{{ item.name }}</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="tw-text-xl tw-font-bold">ما را دنبال کنید</h4>
          <q-separator dark class="tw-mt-2" />
          <div class="tw-mt-3 tw-flex tw-gap-3">
            <q-icon
              v-for="(item, i) in followUs"
              :key="i"
              :name="item.icon"
              size="24px"
              color="gray"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
const followUs = [
  { url: '#', icon: 'fa-brands fa-telegram' },
  { url: '#', icon: 'fa-brands fa-whatsapp' },
  { url: '#', icon: 'fa-brands fa-instagram' },
  { url: '#', icon: 'fa-brands fa-x' },
];
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
const footerContact = [
  {
    name: '09130909729',
    icon: 'call',
    url: 'tel:+989130909729',
  },
  {
    name: '09371417732',
    icon: 'call',
    url: 'tel:+989371417732',
  },
  {
    name: 'info@ahromtech.com',
    icon: 'mail',
    url: 'mailto:info@ahromtech.com',
  },
];
</script>
