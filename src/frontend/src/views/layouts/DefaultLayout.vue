<script lang="ts">
import Vue from 'vue';

import { mapGetters, mapActions } from 'vuex';

import AppBarComponent from '../parts/AppBarComponent.vue';
import FooterComponent from '../parts/FooterComponent.vue';
import NavigationDrawerComponent from '../parts/NavigationDrawerComponent.vue';

import SnackbarComponent from '../../components/SnackbarComponent.vue';

export default Vue.extend({
  name: 'DefaultLayout',

  components: {
    AppBarComponent,
    FooterComponent,
    NavigationDrawerComponent,

    SnackbarComponent,
  },

  computed: {
    ...mapGetters(['infoGetter']),
  },

  async mounted() {
    const existInfo = Object.keys(this.infoGetter).length;
    if (!existInfo) {
      await this.fetchInfoAction();
    }
  },

  methods: {
    ...mapActions(['fetchInfoAction']),
  },
});
</script>

<template>
  <v-app>
    <SnackbarComponent />

    <AppBarComponent />
    <NavigationDrawerComponent />
    <v-main class="grey lighten-4">
      <router-view></router-view>
    </v-main>
    <footer-component />
  </v-app>
</template>

<style lang="scss"></style>
