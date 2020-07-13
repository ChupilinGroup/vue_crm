<script lang="ts">
import Vue from 'vue';

import SnackbarComponent from '../../components/SnackbarComponent.vue';

export default Vue.extend({
  name: 'EmptyLayout',

  components: {
    SnackbarComponent,
  },

  data: () => ({}),
});
</script>

<template>
  <v-app>
    <SnackbarComponent />

    <v-main class="wrapper grey lighten-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped></style>
