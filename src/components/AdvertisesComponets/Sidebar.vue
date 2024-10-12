<template>
  <div>
    <div
      class="tw-grid tw-gap-block-in tw-border tw-border-1 tw-border-gray-200 tw-rounded-lg tw-p-block-in"
    >
      <ais-search-box
        class="lg:tw-block tw-hidden"
        placeholder="جست و جوی آگهی..."
      />
      <ais-panel>
        <div class="tw-text-[15px] tw-mb-1">نوع آگهی</div>
        <ais-refinement-list
          :class-names="{
            'ais-RefinementList-label': 'MyCustomRefinementLabel',
            'ais-RefinementList-item': 'MyCustomRefinementItem',
            'ais-RefinementList-item--selected':
              'MyCustomRefinementList--selected',
          }"
          attribute="type"
          :transformItems="transformTypeItems"
        />
      </ais-panel>
      <ais-panel v-if="showHouseType">
        <div class="tw-text-[15px] tw-mb-1">نوع خانه</div>
        <ais-refinement-list
          :class-names="{
            'ais-RefinementList-label': 'MyCustomRefinementLabel',
            'ais-RefinementList-item': 'MyCustomRefinementItem',
            'ais-RefinementList-item--selected':
              'MyCustomRefinementList--selected',
          }"
          :transform-items="transformItems"
          attribute="house_type"
        />
      </ais-panel>
      <ais-select-component
        label="گرمایش"
        attribute="heating"
        :need-type="showHouseType"
      />
      <ais-select-component
        label="سرمایش"
        attribute="cooling"
        :need-type="showHouseType"
      />
      <ais-select-component
        label="تعداد اتاق"
        attribute="room_count"
        :need-type="showHouseType"
      />
      <ais-select-component
        label="تعداد پارکینگ"
        attribute="car_park_count"
        :need-type="showHouseType"
      />
      <ais-select-component label="منطقه" attribute="location_name" />
      <ais-range-component attribute="price" label="قیمت" />
      <ais-range-component attribute="area" label="متراژ" />
    </div>
  </div>
</template>
<script setup>
import AisSelectComponent from 'components/AisComponents/AisSelectComponent.vue';
import AisRangeComponent from 'components/AisComponents/AisRangeComponent.vue';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const selectedType = ref(null);
const showHouseType = computed(() => selectedType.value !== 'land');

function transformTypeItems(items) {
  const selected = items.find((item) => item.isRefined);
  selectedType.value = selected ? selected.label : null;
  return items.map((item) => ({
    ...item,
    label: t(item.label),
  }));
}
const transformItems = (items) => {
  return items.map((item) => ({
    ...item,
    label: t(item.label),
  }));
};
</script>
<style>
.ais-SearchBox-input {
  border-radius: 0.5rem !important;
}
.MyCustomRefinementItem:hover {
  background-color: rgb(243 244 246);
}
.MyCustomRefinementList--selected {
  background-color: rgb(243, 244, 246);
}
.MyCustomRefinementItem {
  padding: 10px;
  border-radius: 0.5rem;
  margin-top: 2px;
}
</style>
