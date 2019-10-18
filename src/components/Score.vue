<template functional>
  <section :class="$style.wrapper">
    <div :class="$style['score-item']">
      <div
        :class="[$style.label, $style['hits-label']]"
        v-text="'Hits:'"
      />
      <div
        :class="$style.value"
        v-text="props.hits"
      />
    </div>
    <div :class="$style['score-item']">
      <div
        :class="[$style.label, $style['mistakes-label']]"
        v-text="'Mistakes:'"
      />
      <div
        :class="$style.value"
        v-text="props.mistakes"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    hits: { type: Number, required: true },
    mistakes: { type: Number, required: true },
  },
});
</script>

<style lang="scss" module>
.wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.score-item {
  margin: 0 1rem;
}

.hits-label {
  color: green;
}

.mistakes-label {
  color: crimson;
}

.label,
.value {
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 0 0 1px rgba(white, 0.6);
}

.value {
  margin-left: 0.5rem;
  color: white;
}
</style>
