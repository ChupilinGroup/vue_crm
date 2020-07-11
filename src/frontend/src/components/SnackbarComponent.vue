<script lang="ts">
import Vue from 'vue';

import { mapGetters, mapMutations } from 'vuex';

export default Vue.extend({
  name: 'SnackbarComponent',

  data: () => ({
    snackbar: false,
    text: '',
    timeout: 2500,
    color: 'info',
    messages: {
      logout: 'Вы успешно вышли из системы',
    },
  }),

  computed: {
    ...mapGetters(['snackbarStateGetter']),
  },

  created: function () {
    this.$store.watch(
      (state) => state.snackbar.snackbarState,
      () => {
        const msg = this.snackbarStateGetter;
        if (msg !== null) {
          this.snackbarMutation(null);
        }
      },
    );
  },

  mounted() {
    this.checkRoute();
  },

  watch: {
    $route: function () {
      this.checkRoute();
    },
  },

  methods: {
    ...mapMutations(['snackbarMutation']),

    snackTime: function (message: string): void {
      this.snackbar = true;
      this.text = message;
      this.snackbarMutation(message);
    },

    checkRoute: function (): void {
      const messages: any = this.messages;
      const routeQuery: any = this.$route.query;
      if (messages[routeQuery.message]) {
        const message = messages[routeQuery.message];
        this.snackTime(message);
      }
    },
  },
});
</script>

<template>
  <v-snackbar v-model="snackbar" :timeout="timeout" :color="color">
    <div class="wrapper">
      {{ text }}
      <v-btn text @click="snackbar = false">
        Закрыть
      </v-btn>
    </div>
  </v-snackbar>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
