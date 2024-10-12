<template>
  <div v-if="data"
    class="tw-border tw-border-1 tw-border-gray-100 tw-px-5 tw-m-3 tw-rounded-lg tw-container tw-mx-auto">
    <div
      class="lg:tw-flex lg:tw-justify-between tw-grid tw-gap-3 tw-items-center tw-bg-white tw-p-block-in tw-rounded-xl tw-mt-block-bw">
      <div>
        <div class="tw-text-3xl tw-font-bold">{{ data.title }}</div>
        <div class="tw-text-lg tw-flex tw-gap-5 tw-mt-3">
          <div>
            <q-icon name="schedule" />
            {{
    new Date(data.created_at).toLocaleString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }}
          </div>
          <q-separator vertical />
          <div>متراژ : {{ data.area }}</div>
        </div>
      </div>
      <div class="tw-text-2xl tw-font-bold">{{ data.price + ' ' }}تومان</div>
    </div>
    <div class="tw-mt-block-bw" v-if="data.image && data.gallery">
      <div class="lg:tw-grid tw-grid-cols-2 tw-gap-block-in tw-hidden tw-h-[32rem]">
        <div :style="{
    background: getBackgroundUrl(data.image),
  }" class="tw-rounded-lg !tw-bg-cover !tw-bg-center"></div>
        <div class="tw-grid tw-grid-cols-2 tw-gap-block-in">
          <div v-for="item in data.gallery" :key="item.id" :style="{
    background: getBackgroundUrl(item.url),
  }" class="!tw-bg-cover !tw-bg-center"></div>
        </div>
      </div>
      <div class="tw-max-h-[32rem] lg:tw-hidden tw-block">
        <swiper :pagination="{
    dynamicBullets: true,
  }" :modules="modules" class="mySwiper">
          <swiper-slide>
            <q-img :src="getImageUrl(data.image)" class="tw-h-[24rem]" /></swiper-slide>
          <swiper-slide v-for="item in data.gallery" :key="item.id">
            <q-img :src="getImageUrl(item.url)" class="tw-h-[24rem]" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div v-if="data.image && !data.gallery">sdfadfasdf</div>
    <div v-if="data.advertising_attr" class="tw-bg-white tw-p-block-in tw-rounded-xl tw-mt-block-bw">
      <div class="tw-font-bold tw-text-2xl tw-mb-3">مشخصات</div>
      <div class="tw-grid tw-gap-10 lg:tw-grid-cols-3 tw-grid-cols-2">
        <div class="tw-flex tw-items-center">
          <q-icon name="directions_car" color="blue" size="26px" class="tw-p-3 tw-rounded-lg tw-border" />
          <div class="tw-ml-5">
            <div>تعداد پارکینگ</div>
            <div>{{ data.advertising_attr.car_park_count }}</div>
          </div>
        </div>
        <div class="tw-flex tw-items-center">
          <q-icon name="bed" color="black" size="26px" class="tw-p-3 tw-rounded-lg tw-border" />
          <div class="tw-ml-5">
            <div>تعداد اتاق</div>
            <div>{{ data.advertising_attr.room_count }}</div>
          </div>
        </div>
        <div class="tw-flex tw-items-center">
          <q-icon name="cottage" color="black" size="26px" class="tw-p-3 tw-rounded-lg tw-border" />
          <div class="tw-ml-5">
            <div>نوع خانه</div>
            <div>{{ data.advertising_attr.house_type }}</div>
          </div>
        </div>
        <div class="tw-flex tw-items-center">
          <q-icon name="heat_pump" color="gray" size="26px" class="tw-p-3 tw-rounded-lg tw-border" />
          <div class="tw-ml-5">
            <div>نوع سرمایش</div>
            <div>{{ data.advertising_attr.cooling }}</div>
          </div>
        </div>
        <div class="tw-flex tw-items-center">
          <q-icon name="local_fire_department" color="black" size="26px" class="tw-p-3 tw-rounded-lg tw-border" />
          <div class="tw-ml-5">
            <div>نوع گرمایش</div>
            <div>{{ data.advertising_attr.heating }}</div>
          </div>
        </div>
        <div class="tw-flex tw-items-center">
          <q-icon name="calendar_month" color="black" size="26px" class="tw-p-3 tw-rounded-lg tw-border" />
          <div class="tw-ml-5">
            <div>سال ساخت</div>
            <div>{{ data.advertising_attr.building_age }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tw-grid lg:tw-grid-cols-3 tw-grid-cols-1 tw-gap-block-in tw-my-block-bw">
      <div v-if="data.lat && data.lng"
        class="tw-p-block-in tw-col-span-1 tw-text-lg tw-rounded-lg tw-bg-white lg:tw-h-full tw-h-[400px] tw-w-full">
        <neshan-map :lat="data.lat" :lng="data.lng" />
      </div>
      <div v-if="data.description" class="tw-p-block-in tw-text-lg tw-rounded-lg tw-bg-white lg:tw-col-span-2">
        <div class="tw-font-bold tw-text-2xl tw-mb-6">توضیحات</div>
        {{ data.description }}
      </div>
    </div>
  </div>
  <div v-else class="tw-flex tw-items-center tw-justify-center tw-h-screen">
    <q-spinner-grid color="teal" size="4em" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import NeshanMap from 'components/NeshanMap.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useMeta } from 'quasar';
import config from 'src/config';

useMeta({
  title: "آگهی املاک "
})
const data = ref();

const modules = ref([Pagination]);

const route = useRoute();

const getImageUrl = (imagePath: string): string => {
  return `${config.API_URL}/${imagePath}`;
};

const getBackgroundUrl = (imagePath: string): string => {
  return `url(${config.API_URL}/${imagePath}) no-repeat`;
};

onMounted(async () => {
  try {
    const response = await axios.get(
      `${config.API_URL}/api/advertise/${route.params.id}`
    );
    data.value = response.data;
  } catch (error) {
    console.error(error);
  }
});

function generateNeshanUrl(lat: number, lng: number) {
  return `https://neshan.org/maps/#c${lat}-${lng}-13z-0p`;
}

</script>
