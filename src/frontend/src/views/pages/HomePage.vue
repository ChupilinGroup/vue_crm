<script lang="ts">
import Vue from 'vue';

import { mapActions, mapMutations, mapGetters } from 'vuex';

import HomeBillComponent from '../components/home/HomeBillComponent.vue';
import HomeCurrencyComponent from '../components/home/HomeCurrencyComponent.vue';
import LoaderComponent from '../../components/LoaderComponent.vue';

export default Vue.extend({
  name: 'HomePage',

  components: {
    HomeBillComponent,
    HomeCurrencyComponent,
    LoaderComponent,
  },

  data: () => ({
    loading: true,
    currency: null,
  }),

  async mounted() {
    this.currency = await this.commonFetchCurrency();
    this.loading = false;
  },

  methods: {
    ...mapActions(['commonFetchCurrency']),

    async refresh() {
      this.loading = true;
      this.currency = await this.$store.dispatch('commonFetchCurrency');
      console.log('this.currency :>> ', this.currency);
      this.loading = false;
    },
  },
});
</script>

<template>
  <div>
    <v-card-actions>
      <h2>Счет</h2>
      <v-spacer></v-spacer>
      <v-btn color="secondary" @click="refresh">
        обновить
      </v-btn>
    </v-card-actions>

    <LoaderComponent v-if="loading" />

    <div v-else class="row">
      <HomeBillComponent :rates="currency.rates" />

      <HomeCurrencyComponent :rates="currency.rates" :date="currency.date" />
    </div>
  </div>
</template>
