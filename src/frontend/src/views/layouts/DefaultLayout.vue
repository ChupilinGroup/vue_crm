<script lang="ts">
import Vue from 'vue';

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
  computed: {},
  methods: {},
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
