<template>
  <div class="xl:tw-col-span-3 lg:tw-col-span-2">
    <ais-hits>
      <template v-slot="{ items }">
        <div class="tw-grid xl:tw-grid-cols-3  md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-block-in sm:tw-ml-[15]">
          <router-link  v-for="(item, index) in items" :key="index"
            :to="{ name: 'showPost', params: { id: item.id } }"><q-card class="tw-rounded-lg tw-shadow-md">
              <q-img v-if="item.image" :src="getImageUrl(item.image)">
                <div style="background: none" class="absolute-bottom text-h6">
                  <span class="tw-bg-white tw-text-black tw-p-2 tw-rounded-lg">{{ item.price }} تومان</span>
                </div>
              </q-img>
              <q-img v-else src="~/assets/no-photo.webp">
                <div style="background: none" class="absolute-bottom text-h6">
                  <span class="tw-bg-white tw-text-black tw-p-2 tw-rounded-lg">{{ item.price }} تومان</span>
                </div>
              </q-img>

              <q-card-section>
                <div class="text-h6">{{ item.title }}</div>
                <div class="tw-text-gray-500 tw-text-[14px]">
                  {{ item.location_name }}
                </div>
                <div class="tw-text-gray-400">
                  {{ item.address }}
                </div>
              </q-card-section>
              <q-separator inset />
              <q-card-section class="q-pt-none tw-flex tw-gap-5 tw-mt-2">
                <div class="tw-text-[11px]">
                  <q-icon name="directions_car" color="black" size="24px" />
                  {{ item.car_park_count }}
                  پارک
                </div>
                <div class="tw-text-[11px]">
                  <q-icon name="bed" color="black" size="24px" />
                  {{ item.room_count }}
                  خوابه
                </div>
                <div class="tw-text-[11px]">
                  <q-icon name="crop" color="black" size="24px" />
                  {{ item.area }}
                  متر مربع
                </div>
              </q-card-section>
            </q-card></router-link>
        </div>
      </template>
    </ais-hits>
  </div>
</template>
<script setup lang="ts">
import config from "src/config";
const getImageUrl = (imagePath: string): string => {
  return `${config.API_URL}/${imagePath}`;
};
</script>
