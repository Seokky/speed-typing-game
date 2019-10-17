<template>
  <div class="game-wrapper">
    dsgdfg
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { TSettings } from '@/types/Settings';

import { RU_LETTERS, EN_LETTERS } from '@/constants/letters';

export default Vue.extend({
  name: 'Game',

  props: {
    settings: { type: Object as PropType<TSettings>, required: true },
  },

});
</script>

<style scoped lang="scss">
.game-wrapper {
  width: 100%;
  height: 100%;
}
</style>
