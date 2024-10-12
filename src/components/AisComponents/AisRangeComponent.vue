<template>
  <ais-panel>
    <div class="tw-text-[15px] tw-mb-1">{{ label }}</div>
    <ais-range-input :attribute="attribute"
      ><template v-slot="{ currentRefinement, range, canRefine, refine }">
        <q-expansion-item
          v-model="expanded"
          class="tw-bg-gray-100 tw-rounded-lg"
          header-class="tw-rounded-lg"
          :label="range.min + '  -  ' + range.max"
        >
          <div class="tw-bg-white tw-text-center tw-py-2">
            <input
              type="number"
              class="tw-bg-gray-200 tw-p-2 tw-mr-1 tw-rounded-lg tw-text-lg tw-text-center"
              :min="range.min"
              :max="range.max"
              :placeholder="range.min"
              :value="formatMinValue(currentRefinement.min, range.min)"
              @input="
                refine({
                  min: $event.currentTarget.value,
                  max: formatMaxValue(currentRefinement.max, range.max),
                })
              "
            />
            <span class="tw-text-[15px]">تا</span>
            <input
              type="number"
              class="tw-bg-gray-200 tw-p-2 tw-ml-1 tw-rounded-lg tw-text-lg tw-text-center"
              :min="range.min"
              :max="range.max"
              :placeholder="range.max"
              :disabled="!canRefine"
              :value="formatMaxValue(currentRefinement.max, range.max)"
              @input="
                refine({
                  min: formatMinValue(currentRefinement.min, range.min),
                  max: $event.currentTarget.value,
                })
              "
            />
          </div>
        </q-expansion-item> </template
    ></ais-range-input>
  </ais-panel>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
  attribute: { type: String, required: true },
  label: { type: String, required: true },
});
const expanded = ref(false);
function formatMinValue(minValue, minRange) {
  return minValue !== null && minValue !== minRange ? minValue : '';
}
function formatMaxValue(maxValue, maxRange) {
  return maxValue !== null && maxValue !== maxRange ? maxValue : '';
}
</script>
