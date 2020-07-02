<script lang="ts">
import Vue from 'vue';

import DefaultLayout from './layouts/DefaultLayout.vue';
import EmptyLayout from './layouts/EmptyLayout.vue';

export default Vue.extend({
  name: 'app',
  components: {
    DefaultLayout,
    EmptyLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
});
</script>

<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<style lang="scss">
@import '../node_modules/materialize-css/dist/css/materialize.min';
@import '../src/assets/scss/main.scss';

#app {
  font-family: 'Avenir', 'Helvetica', 'Arial', 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
