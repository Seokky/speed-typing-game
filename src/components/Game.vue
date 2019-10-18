<template>
  <div :class="$style.wrapper">
    <ScorePanel
      :hits="hitsCount"
      :mistakes="mistakesCount"
    />
    <HistoryWidget :history-object="historyObject" />

    <canvas
      ref="game"
      width="1500"
      height="750"
      :class="$style.canvas"
    />

    <button
      v-if="!running"
      :class="$style.btn"
      @click="startGame"
      v-text="'Start game'"
    />
    <button
      v-else
      :class="$style.btn"
      @click="stopGame"
      v-text="'Stop game'"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import ScorePanel from './ScorePanel.vue';
import HistoryWidget, { THistoryObject } from './HistoryWidget.vue';

import { TSettings } from '@/types/Settings';

import { getLocaleLetters, getRandomLetter } from '@/constants/letters';

export default Vue.extend({
  name: 'Game',

  components: {
    ScorePanel, HistoryWidget,
  },

  props: {
    settings: { type: Object as PropType<TSettings>, required: true },
  },

  data: () => ({
    canvas: null as any,
    ctx: null as any,
    running: false,
    currentLetter: null as string | null,
    hitsCount: 0,
    mistakesCount: 0,
    historyObject: {
      letter: 'A',
      type: 'hit',
    } as THistoryObject,
  }),

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.canvas = this.$refs.game;
      this.ctx = this.canvas.getContext('2d');
      this.drawNewLetter();
    },
    startGame() {
      this.running = true;
      this.drawNewLetter();
      document.addEventListener('keydown', this.onKeyDown);
    },
    stopGame() {
      this.running = false;
      document.removeEventListener('keydown', this.onKeyDown);
    },
    onKeyDown(e: KeyboardEvent) {
      if (e.key === this.currentLetter) {
        this.onHit();
      } else {
        this.onMistake();
      }
    },
    onHit() {
      this.hitsCount += 1;

      this.historyObject.letter = this.currentLetter!;
      this.historyObject.type = 'hit';

      this.drawNewLetter();
    },
    onMistake() {
      this.mistakesCount += 1;

      this.historyObject.letter = this.currentLetter!;
      this.historyObject.type = 'mistake';

      if (this.settings.complexity === 'hardcore') {
        this.stopGame();
      } else {
        this.drawNewLetter();
      }
    },
    drawNewLetter() {
      this.clearCanvas();

      this.currentLetter = getRandomLetter(this.settings.language);

      this.ctx.font = '80px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = 'white';
      this.ctx.fillText(
        this.currentLetter,
        this.canvas.width / 2,
        this.canvas.height / 2,
      );
    },
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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

.btn {
  cursor: pointer;
  display: block;
  margin: 0 auto;
  position: absolute;
  bottom: 10vh;
  left: 0;
  right: 0;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 5px;
}

.btn:hover {
  transform: scale(0.985);
}
</style>
