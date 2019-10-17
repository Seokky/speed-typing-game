<template>
  <div :class="$style.overlay">
    <div :class="$style.content">
      <span
        :class="$style.header"
        v-text="'Game settings'"
      />

      <div :class="$style.settings">
        <div :class="$style['settings-item']">
          <div
            :class="$style.label"
            v-text="'Language:'"
          />
          <select v-model="language">
            <option
              value="en"
              v-text="'en'"
            />
            <option
              value="ru"
              v-text="'ru'"
            />
          </select>
        </div>

        <div :class="$style['settings-item']">
          <div
            :class="$style.label"
            v-text="'Complexity level:'"
          />
          <select v-model="complexity">
            <option
              :value="1"
              v-text="'Easy'"
            />
            <option
              :value="2"
              v-text="'Normal'"
            />
            <option
              :value="3"
              v-text="'Hard'"
            />
          </select>
        </div>
      </div>

      <div :class="$style.actions">
        <button
          :class="$style.accept"
          @click="emitSettings"
          v-text="'Accept'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { TLanguage } from '@/types/Language';
import { TComplexity } from '@/types/Complexity';
import { TSettings } from '@/types/Settings';

export default Vue.extend({
  data: () => ({
    language: 'en' as TLanguage,
    complexity: 1 as TComplexity,
  }),

  methods: {
    emitSettings() {
      this.$emit('accept', {
        language: this.language,
        complexity: this.complexity,
      } as TSettings);
    },
  },
});
</script>

<style lang="scss" module>
.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(black, 0.4);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  background: white;
  min-width: 350px;
  padding: 1rem;
  border-radius: 5px;
}

.header {
  font-size: 1.2rem;
}

.settings {
  margin: 2rem 0;
}

.settings-item {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.label {
  margin-right: 0.5rem;
}

.accept {
  cursor: pointer;
  border: none;
  box-shadow: 0 0 2px rgba(black, 0.4);
  padding: 0.25rem 1rem;
  font-size: 1.1rem;
}
</style>
