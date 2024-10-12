<template>
  <div class="tw-container tw-mx-auto lg:tw-my-block-bw tw-ty-block-in !tw-bg-white">
    <ais-instant-search
      :search-client="searchClient"
      index-name="Advertise"
      :routing="routing"
      :future="{ preserveSharedStateOnUnmount: true }"
    >
      <div class="tw-flex tw-gap-2 lg:tw-hidden">
        <div
          @click="drawerLeft = !drawerLeft"
          class="text-white tw-basis-1/4 tw-cursor-pointer tw-bg-teal-600 tw-rounded-lg tw-text-center tw-content-center"
        >
          <q-icon name="filter_alt" />
          فیلتر ها
        </div>
        <ais-search-box
          class="lg:tw-hidden tw-basis-3/4"
          placeholder="جست و جوی آگهی..."
        />
      </div>
      <div
        class="tw-grid xl:tw-grid-cols-4 lg:tw-grid-cols-3 tw-tw-gap-block-bw tw-gap-block-in"
      >
        <div class="lg:tw-hidden tw-block text-white">
          <q-drawer v-model="drawerLeft" persistent>
              <div class="tw-w-full tw-p-4">
                <q-btn color="teal" label="اعمال" class=" tw-w-full" @click="drawerLeft = false"/>
              </div>
              <sidebar />
          </q-drawer>
        </div>
        <sidebar class="lg:tw-block tw-hidden" />
        <advertise />
      </div>
    </ais-instant-search>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import '../css/typesense.scss';
import Sidebar from 'components/AdvertisesComponets/Sidebar.vue';
import Advertise from 'components/AdvertisesComponets/Advertise.vue';
import useTypesense from 'src/Typesense/config';
import { useMeta } from 'quasar';

useMeta({
  title: 'آگهی های املاک',
});

const drawerLeft = ref(false);
const router = useRouter();
const route = useRoute();

const { searchClient } = useTypesense('title');

const routing = {
  router: {
    read() {
      return route.query;
    },
    write(routeState) {
      router.push({ query: routeState });
    },
    createURL(routeState) {
      return router.resolve({ query: routeState }).href;
    },
    onUpdate(cb) {
      this._onPopState = (event) => {
        const routeState = event.state;
        if (!routeState) {
          cb(this.read());
        } else {
          cb(routeState);
        }
      };
      window.addEventListener('popstate', this._onPopState);
    },
    dispose() {
      window.removeEventListener('popstate', this._onPopState);
      this.write();
    },
  },
  stateMapping: {
    stateToRoute(uiState) {
      return {
        query: uiState.Advertise.query,
        type: uiState.Advertise.refinementList && uiState.Advertise.refinementList.type && uiState.Advertise.refinementList.type.join('~'),
        house_type: uiState.Advertise.refinementList && uiState.Advertise.refinementList.house_type && uiState.Advertise.refinementList.house_type.join('~'),
        heating: uiState.Advertise.menu && uiState.Advertise.menu.heating,
        cooling: uiState.Advertise.menu && uiState.Advertise.menu.cooling,
        room_count: uiState.Advertise.menu && uiState.Advertise.menu.room_count,
        car_park_count: uiState.Advertise.menu && uiState.Advertise.menu.car_park_count,
        location_name: uiState.Advertise.menu && uiState.Advertise.menu.location_name,
        price: uiState.Advertise.range && uiState.Advertise.range.price,
        area: uiState.Advertise.range && uiState.Advertise.range.area,
        page: uiState.Advertise.page,
      };
    },
    routeToState(routeState) {
      return {
        Advertise: {
          query: routeState.query,
          refinementList: {
            type: routeState.type ? routeState.type.split('~') : [],
            house_type: routeState.house_type ? routeState.house_type.split('~') : [],
          },
          menu: {
            heating: routeState.heating,
            cooling: routeState.cooling,
            room_count: routeState.room_count,
            car_park_count: routeState.car_park_count,
            location_name: routeState.location_name,
          },
          range: {
            price: routeState.price,
            area: routeState.area,
          },
          page: routeState.page,
        },
      };
    },
  },
};
</script>
