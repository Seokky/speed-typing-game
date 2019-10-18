<template>
  <div :class="$style.wrapper">
    <canvas
      ref="game"
      width="1500"
      height="750"
      :class="$style.canvas"
    />

    <button
      :class="$style['start-btn']"
      @click="startGame"
      v-text="'Start!'"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { TSettings } from '@/types/Settings';

import { getRandomColor } from '@/constants/colors';
import { getLocaleLetters, getRandomLetter } from '@/constants/letters';

export default Vue.extend({
  name: 'Game',

  props: {
    settings: { type: Object as PropType<TSettings>, required: true },
  },

  data: () => ({
    canvas: null as any,
    ctx: null as any,
  }),

  computed: {
    letters(): string[] {
      return getLocaleLetters(this.settings.language);
    },
  },

  mounted() {
    this.init();
    this.drawLetterBox();
  },

  methods: {
    init() {
      this.canvas = this.$refs.game;
      this.ctx = this.canvas.getContext('2d');
    },
    startGame() {

    },
    drawLetterBox() {
      const letter = getRandomLetter(this.settings.language);
      this.ctx.font = '60px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = getRandomColor();
      this.ctx.fillText(
        letter,
        this.canvas.width / 2,
        this.canvas.height / 2,
      );
    },
  },
});
</script>

<style lang="scss" module>
.wrapper {
  width: 100%;
  height: 100%;
  background: rgb(44, 31, 52);
  position: relative;
}

.canvas {
  width: 100%;
  height: 100%;
}

.start-btn {
  cursor: pointer;
  display: block;
  margin: 0 auto;
  position: absolute;
  bottom: 10vh;
  left: 0;
  right: 0;
  font-size: 2rem;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 5px;
}

.start-btn:hover {
  transform: scale(0.985);
}
</style>
