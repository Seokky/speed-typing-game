<template>
  <section
    v-if="history"
    :class="$style.wrapper"
  >
    <div
      v-for="(letter, index) in history"
      :key="index"
      :class="letter.type"
      v-text="letter.letter"
    />
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export type THistoryObject = {
  letter: string,
  type: 'hit' | 'mistake',
}

export default Vue.extend({
  props: {
    historyObject: { type: Object as PropType<THistoryObject>, required: true },
  },

  data: () => ({
    history: [] as THistoryObject[],
  }),

  watch: {
    historyObject: {
      handler() {
        this.pushLetterToHistory(this.historyObject);
      },
      deep: true,
    },
  },

  methods: {
    pushLetterToHistory(payload: THistoryObject) {
      if (!payload) return;

      this.history.push(payload);
    },
  },
});
</script>

<style lang="scss" module>
.wrapper {

}
</style>
