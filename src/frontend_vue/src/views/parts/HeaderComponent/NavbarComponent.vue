<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import IconBurgerLineal from '../../../components/icons/IconBurgerLineal.vue';

export default Vue.extend({
  name: 'NavbarComponent',
  components: {
    IconBurgerLineal,
  },
  computed: {
    ...mapGetters(['isOpenSidebarGetter']),
  },
  methods: {
    clickBurgerMenu() {
      this.$store.dispatch('isOpenSidebarAction', this.isOpenSidebarGetter);
    },
    logout() {
      console.log('logout :>> ');
      this.$router.push('/login?message=logout');
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
      <button @click="clickBurgerMenu" class="btn btn-burger">
        <!-- <i class="">burger</i> -->

        <IconBurgerLineal class="svg svg-icon-burger" />
      </button>
      <span class="black-text">12.12.12</span>
    </div>

    <ul class="navbar_right">
      <!-- <li>
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
        </ul> -->

      <md-menu md-size="auto" md-align-trigger>
        <md-button md-menu-trigger class="btn">
          USER NAME
        </md-button>
        <md-menu-content class="md-menu-content">
          <md-menu-item class="md-menu-item">
            <router-link class="btn btn__menu-item" to="/Profile" tag="button">
              Профиль
            </router-link>
          </md-menu-item>
          <md-menu-item class="md-menu-item">
            <button class="btn btn__menu-item" @click.prevent="logout">
              Выйти
            </button>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
      <!-- </li> -->
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
  font-family: $font__Lora;
  background: none;
  border: 0;
  padding: 5px;
}
.btn__menu-item {
  // cursor: pointer;
  // padding: 0;
  // margin: 0;

  // text-transform: none;
  // text-decoration: none;
  color: black;
}

.links {
  padding: 0;
  margin: 0;
  display: flex;
}
.navbar_left {
  display: flex;
  align-items: center;
}

.svg {
  height: 40px;
  width: 40px;
}
.btn-burger {
  margin: 0 15px;
  padding: 0;
  display: flex;
  align-items: center;
}

.navbar_right {
  direction: rtl;
  margin-right: 15px;
}
.md-menu-content {
  margin-top: 15px;
}
.md-menu-item {
  font-family: $font__Lora;
}
</style>
