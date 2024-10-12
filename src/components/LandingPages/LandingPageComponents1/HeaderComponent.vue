<template>
  <div
    class="tw-w-full tw-bg-cover tw-bg-center"
    style="
      height: 44rem;
      background-image: url(https://theme.aliniyazi.ir/homeo/wp-content/uploads/2020/03/slider1.jpg);
    "
  >
    <div
      class="tw-flex tw-items-center tw-justify-center tw-h-full tw-w-full tw-bg-gray-900 tw-bg-opacity-50"
    >
      <div class="tw-text-center tw-w-full">
        <h1
          class="tw-text-white tw-text-2xl tw-font-bold tw-uppercase md:tw-text-3xl"
        >
          خانه ی رویایی خود را پیدا کنید.
        </h1>
        <div
          class="tw-mt-4 tw-px-4 tw-bg-white tw-py-6 tw-mx-[8rem] tw-text-sm tw-uppercase tw-font-medium tw-rounded focus:tw-outline-none"
        >
          <q-form class="tw-grid xl:tw-grid-cols-7 tw-gap-2"
            ><q-input
              outlined
              v-model="filter.query"
              label="کلمه کلیدی را وارد کنید"
              class="tw-col-span-2"
            />
            <q-select
              outlined
              :options="Advertise_type"
              option-label="label"
              option-value="key"
              emit-value
              map-options
              v-model="filter.advertiseType"
              label="نوع آگهی"
            />
            <q-select
              outlined
              :options="House_type"
              option-label="label"
              option-value="key"
              map-options
              emit-value
              v-model="filter.houseType"
              label="نوع خانه"
            />
            <q-select
              outlined
              :options="Cooling_type"
              option-label="label"
              option-value="key"
              map-options
              emit-value
              v-model="filter.collingType"
              label="نوع سرمایش"
            />
            <q-select
              outlined
              :options="Heating_type"
              option-label="label"
              option-value="key"
              map-options
              emit-value
              v-model="filter.heatingType"
              label="نوع گرمایش"
            />
            <q-btn label="جستجو" color="red" :to="dynamicLink"></q-btn>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive, ref } from 'vue';
import {
  Advertise_type,
  Cooling_type,
  Heating_type,
  House_type,
} from 'src/utils/AdvertiseOptions';

const filter = reactive({
  query: '',
  advertiseType: '',
  houseType: '',
  collingType: '',
  heatingType: '',
});
const dynamicLink = computed(() => {
  const query = {};
  if (filter.query) query.query = filter.query;
  if (filter.advertiseType) query.type = filter.advertiseType;
  if (filter.houseType) query.house_type = filter.houseType;
  if (filter.collingType) query.cooling = filter.collingType;
  if (filter.heatingType) query.heating = filter.heatingType;

  return {
    name: 'advertises',
    query,
  };
});
const text = ref();
</script>
