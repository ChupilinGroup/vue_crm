<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NavbarComponent',
  components: {},
});
</script>

<template>
  <nav class="navigation">
    <div class="container">
      <ul class="links">
        <li>
          <router-link to="/" exact="" active-class="active" :prefetch="false"
            >главная</router-link
          >
        </li>
        <li>
          <router-link to="/categories" active-class="active"
            >categories</router-link
          >
        </li>
        <li>
          <router-link to="/login" active-class="active">login</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '../../../assets/scss/_colors.scss';
@import '../../../assets/scss/_fonts.scss';

.navigation {
  font-size: 12px;
  letter-spacing: 0.5px;
  z-index: 10;
  height: 80px;

  color: $color__white;
  background-color: #1b2024;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
}
.container {
  display: grid;
  justify-items: left;
  justify-content: stretch;
  grid-template-columns: auto max-content max-content;
  grid-column-gap: 20px;

  max-width: 1270px;
  width: 100%;
  height: 100%;
  padding-left: 2.5%;
  padding-right: 2.5%;
}
a {
  text-transform: uppercase;
  padding: 0 10px;
}
.links {
  padding: 0;
  margin: 0;
  display: flex;
}
</style>
