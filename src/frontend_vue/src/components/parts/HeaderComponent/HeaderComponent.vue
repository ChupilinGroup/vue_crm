<script lang="ts">
import Vue from 'vue';
import TopBarComponent from './TopBarComponent.vue';
import NavbarComponent from './NavbarComponent.vue';
export default Vue.extend({
  name: 'HeaderComponent',
  components: {
    TopBarComponent,
    NavbarComponent,
  },
});
</script>

<template>
  <header class="header-container">
    <TopBarComponent></TopBarComponent>
    <NavbarComponent></NavbarComponent>
  </header>
</template>
