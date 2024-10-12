<template>
  <div class="tw-text-center tw-p-10">
    <h2 class="tw-text-3xl tw-font-bold">املاک ویژه</h2>
    <div class="tw-text-lg">بهترین املاکی که توسط ما انتخاب می شوند.</div>
  </div>
  <swiper :spaceBetween="30" :pagination="{
    clickable: true,
  }" :modules="modules" :breakpoints="breakpoints" class="mySwiper tw-my-5">
    <swiper-slide class="tw-mb-[6rem]" v-for="advertise in specialAdvertiseData" :key="advertise.id"><router-link
        :to="{ name: 'showPost', params: { id: advertise.id } }"><q-card class="tw-rounded-lg tw-shadow-md">
          <q-img src="../../../assets/img1.jpg">
            <div class="absolute-bottom text-h6">
              <span class="tw-bg-white tw-text-black tw-p-2 tw-rounded-lg">{{ advertise.price }} تومان</span>
            </div>
          </q-img>

          <q-card-section>
            <div class="text-h6">{{ advertise.title }}</div>
            <div class="tw-text-gray-500 tw-text-[14px]">
              {{ advertise.location_name }}
            </div>
            <div class="tw-text-gray-400">
              {{ advertise.address }}
            </div>
          </q-card-section>
        </q-card></router-link>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
import config from 'src/config';
const modules = ref([Pagination]);

const breakpoints = ref({
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 50,
  },
});
const specialAdvertiseData = ref();
const getSpecialAdvertise = async () => {
  await axios
    .get(`${config.API_URL}/api/advertise`)
    .then((res) => {
      specialAdvertiseData.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
onMounted(() => {
  getSpecialAdvertise();
});
</script>
<style scoped>
.containerAds {
  background-image: linear-gradient(180deg,
      #f4f0ce 0%,
      #f4f0ce 50%,
      #f7f2c8 110%);
}
</style>
