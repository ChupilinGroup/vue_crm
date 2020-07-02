<script lang="ts">
import Vue from 'vue';

import IconLocationPin from '../../icons/IconLocationPin.vue';
import IconPhone from '../../icons/IconPhone.vue';
import IconFacebook from '../../icons/IconFacebook.vue';
import IconVK2 from '../../icons/IconVK2.vue';
import IconTwitter from '../../icons/IconTwitter.vue';

export default Vue.extend({
  name: 'TopBarComponent',
  components: {
    IconLocationPin,
    IconPhone,
    IconFacebook,
    IconVK2,
    IconTwitter,
  },
});
</script>

<template>
  <div class="top-bar">
    <div class="container">
      <div class="location">
        <router-link to="/contact-us">
          <IconLocationPin />
          <span>Витебск, пр-т Победы, 1</span>
        </router-link>
      </div>
      <div class="phone">
        <a href="tel:+375295550505">
          <IconPhone />
          <span>+375(29) 555-05-05</span>
        </a>
      </div>
      <ul class="additional-links">
        <li class="link">
          <router-link to="/contact-us">Контакты</router-link>
        </li>
      </ul>
      <div class="social">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          <IconFacebook />
        </a>
        <a
          href="https://vk.com"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          <IconVK2 />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          <IconTwitter />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../assets/scss/_colors.scss';

.top-bar {
  font-size: 12px;
  letter-spacing: 0.5px;
  z-index: 10;
  height: 35px;

  color: $color__white;
  background-color: #1b2024;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
}
.container {
  height: 100%;
  display: grid;
  justify-items: left;
  justify-content: stretch;
  grid-template-columns: max-content auto max-content max-content;
  grid-column-gap: 20px;

  max-width: 1270px;
  width: 100%;
  padding-left: 2.5%;
  padding-right: 2.5%;
}

.svg {
  fill: $color__white;
  height: 12px;
  width: 12px;
  margin: 0 2px 0;
}
</style>
