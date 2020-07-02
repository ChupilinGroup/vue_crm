<script lang="ts">
import Vue from 'vue';
import HeaderComponent from '../parts/HeaderComponent/HeaderComponent.vue';
import FooterComponent from '../parts/FooterComponent.vue';

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    HeaderComponent,
    FooterComponent,
  },
});

// TODO: Добавить управление медиазапросами через JS, состояние переносим в стор
/* 
Large desktops and laptops 
media (min-width: 1200px) {}
Portrait tablets and medium desktops 
media (min-width: 992px) and (max-width: 1199px) {}
Portrait tablets and small desktops 
media (min-width: 768px) and (max-width: 991px) {}
Landscape phones and portrait tablets 
media (max-width: 767px) {}
Landscape phones and smaller 
media (max-width: 480px) {}
*/
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <HeaderComponent />
      <main>
        <transition name="fade">
          <router-view />
        </transition>
      </main>
    </div>
    <FooterComponent />
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
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 2px);
}
.content {
  flex: 1 0 auto;
}
.footer {
  flex: 0 0 auto;
}

// анимация плавного перехода страниц
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}
.fade-enter-active {
  transition-delay: 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
