<template>
  <div id="app">
    <GameSettings
      v-if="settingsDialog"
      @accept="acceptSettings"
    />
    <Game :settings="settings" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { TSettings } from '@/types/Settings';

import Game from '@/components/Game.vue';
import GameSettings from '@/components/GameSettings.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Game, GameSettings,
  },

  data: () => ({
    settingsDialog: true,
    settings: null as TSettings | null,
  }),

  methods: {
    acceptSettings(payload: TSettings) {
      this.settings = payload;
      this.settingsDialog = false;
    },
  },
});
</script>

<style lang="scss">
@import '@/styles/reset.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>
