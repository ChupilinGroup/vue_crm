<script lang="ts">
import Vue from 'vue';
import HeaderComponent from '../parts/HeaderComponent/HeaderComponent.vue';
import FooterComponent from '../parts/FooterComponent.vue';
import SidebarComponent from '../parts/SidebarComponent.vue';

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  },
});
</script>

<template>
  <div class="wrapper">
    <header-component class="header" />
    <sidebar-component class="sidebar" />
    <main class="main">
      <transition name="fade">
        <router-view />
      </transition>
    </main>
    <footer-component class="footer" />
  </div>
</template>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

// прижимаем footer к низу страницы
.wrapper {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 150px auto;
  grid-template-rows: 100px auto 30px;
}
.header {
  grid-column: 1 / span 2;
  grid-row: 1;
}
.sidebar {
  grid-column: 1;
  grid-row: 2;
}
.main {
  grid-column: 2;
  grid-row: 2;
}
.footer {
  grid-column: 1 / span 2;
  grid-row: 3;
}

// анимация плавного перехода страниц
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.3s;
}
.fade-enter-active {
  transition-delay: 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
