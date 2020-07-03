<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'NavbarComponent',
  components: {},
  computed: {
    ...mapGetters(['isOpenSidebarGetter']),
  },
  methods: {
    clickBurgerMenu() {
      this.$store.dispatch('isOpenSidebarAction', this.isOpenSidebarGetter);
    },
  },
});
</script>

<template>
  <nav class="nav_wrapper">
    <!-- <ul class="links">
        <li>
          <router-link to="/" exact="" active-class="active" :prefetch="false">
            главная
          </router-link>
        </li>
        <li>
          <router-link to="/categories" active-class="active">
            categories
          </router-link>
        </li>
        <li>
          <router-link to="/login" active-class="active">
            login
          </router-link>
        </li>
      </ul> -->

    <div class="navbar_left">
      <button @click="clickBurgerMenu" class="btn">
        <i class="">burger</i>
      </button>
      <span class="black-text">12.12.12</span>
    </div>

    <ul class="navbar_right right hide-on-small-and-down">
      <li>
        <a class="dropdown-trigger black-text" href="#" data-target="dropdown">
          USER NAME
          <i class="">arrow_drop_down</i>
        </a>

        <ul class="dropdown-content">
          <li>
            <a href="#" class="black-text">
              <i class="">account_circle</i>Профиль
            </a>
          </li>
          <li class="divider" tabindex="-1"></li>
          <li>
            <a href="#" class="black-text">
              <i class="">assignment_return</i>Выйти
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '../../../assets/scss/_colors.scss';
@import '../../../assets/scss/_fonts.scss';

.nav_wrapper {
  font-size: 12px;
  letter-spacing: 0.5px;
  z-index: 10;
  min-height: 100%;
  color: $color__white;
  background-color: #1b2024;

  display: grid;
  grid-template-columns: 200px auto;
  align-items: center;
}
a {
  text-transform: uppercase;
  padding: 0 10px;
}
.btn {
  background: none;
  border: 0;
  padding: 5px;
}
.links {
  padding: 0;
  margin: 0;
  display: flex;
}
</style>
