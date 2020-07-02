<script lang="ts">
import Vue from 'vue';

import NavbarComponent from './NavbarComponent.vue';
export default Vue.extend({
  name: 'HeaderComponent',
  components: {
    NavbarComponent,
  },
});
</script>

<template>
  <header class="header-container">
    <NavbarComponent></NavbarComponent>
  </header>
</template>
