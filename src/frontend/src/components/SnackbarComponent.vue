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
          this.snackbar = true;
          this.text = this.snackbarStateGetter;
          this.snackbarMutation(null);
        }
      },
    );
  },

  methods: {
    ...mapMutations(['snackbarMutation']),
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
