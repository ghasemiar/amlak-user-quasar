<template>
  <div class="containerHeader tw-w-full tw-bg-center">
    <div class="tw-flex tw-items-center tw-justify-center tw-h-full tw-w-full">
      <div
        class="tw-m-1 tw-text-center tw-w-full tw-py-5 tw-px-2 tw-rounded-md"
      >
        <h1
          class="tw-text-stone-800 !tw-text-4xl tw-font-bold tw-uppercase md:tw-text-3xl tw-m-5"
        >
          خانه مورد علاقه خود را پیدا کنید!
        </h1>
        <div
          class="tw-mt-1 md:tw-mt-4 tw-px-5 tw-bg-white tw-py-6 tw-mx-[1rem] sm:tw-mx-[2rem] md:tw-mx-[4rem] tw-text-sm tw-uppercase tw-font-medium tw-rounded-lg focus:tw-outline-none !tw-border !tw-border-[1px] tw-border-gray-300 !tw-p-5 !tw-mt-10"
        >
          <q-form class="tw-grid xl:tw-grid-cols-7 tw-gap-5 tw-text-black"
          ><q-input
            outlined
            v-model="filter.query"
            label="کلمه کلیدی را وارد کنید"
            color="teal"
            class="tw-col-span-2 tw-rounded-lg !tw-text-teal"
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
              color="teal"
              class="tw-col-span-2 lg:tw-col-span-1 tw-rounded-lg"
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
              color="teal"
              class="tw-col-span-2 lg:tw-col-span-1 tw-rounded-lg"
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
              color="teal"
              class="tw-col-span-2 lg:tw-col-span-1 tw-rounded-lg"
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
              color="teal"
              class="tw-col-span-2 lg:tw-col-span-1 tw-rounded-lg"
            />
            <q-btn
              flat
              label="جستجو"
              color="white"
              :to="dynamicLink"
              class="tw-bg-teal-600 tw-text-lg tw-h-15 tw-col-span-2 xl:tw-col-span-1 tw-rounded-lg max-xl:tw-p-4"
            ></q-btn>
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
<style scoped>
.containerHeader {
  background-image: linear-gradient(
    180deg,
    #f4f0ce 0%,
    #f4f0ce 50%,
    #f7f2c8 110%
  );
}
</style>
