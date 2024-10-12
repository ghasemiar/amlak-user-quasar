<template>
  <div id="map"></div>
</template>

<script setup>
import '@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css';
import nmp_mapboxgl from '@neshan-maps-platform/mapbox-gl';
import { onMounted, ref } from 'vue';
const props = defineProps({
  lat: { type: String, required: true },
  lng: { type: String, required: true },
});

onMounted(() => {
  const map = new nmp_mapboxgl.Map({
    mapType: nmp_mapboxgl.Map.mapTypes.neshanVector,
    container: 'map',
    zoom: 11,
    scale: false,
    boxZoom: false,
    doubleClickZoom: false,
    scrollZoom: false,
    dragRotate: false,
    dragPan: false,
    interactive: false,
    center: [51.389, 35.6892],
    attributionControl: false,
    draggable: false,
    trackResize: false,
    mapKey: 'web.a0be47102c054a1887734fb0b75dc0af',
    poi: false,
    traffic: false,
  });
  const marker = new nmp_mapboxgl.Marker({ draggable: false })
    .setLngLat([51.389, 35.6892])
    .addTo(map);
});
</script>

<style lang="css" scoped>
#map {
  height: 100%;
  width: 100%;
  border-radius: 0.75rem;
}
</style>
