<template>
  <ais-panel v-if="needType">
    <ais-menu-select :attribute="attribute" :transform-items="transformItems">
      <template v-slot="{ items, refine }">
        <q-select
          :label="label"
          v-model="test"
          :options="items"
          filled
          color="teal"
          @update:model-value="updateModelValue(refine, test)"
        >
          <template v-if="test" v-slot:append>
            <q-icon
              name="cancel"
              @click="clearSelection(refine)"
              class="cursor-pointer"
            />
          </template>
        </q-select>
      </template>
    </ais-menu-select>
  </ais-panel>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { t } = useI18n();
const props = defineProps({
  attribute: { type: String, required: true },
  label: { type: String, required: true },
  needType: { type: Boolean, required: false, default: true },
});
const test = ref(null);

const transformItems = (items) => {
  for (const item of items) {
    if (item.isRefined) {
      test.value = { ...item, label: t(item.label) };
    }
  }
  return items.map((item) => ({
    ...item,
    label: t(item.label),
  }));
};

const updateModelValue = (refine, value) => {
  if (value) {
    refine(value.value);
  }
};

const clearSelection = (refine) => {
  refine(null);
  test.value = null;
};

</script>
