<script lang="ts">
import Vue from 'vue';

import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'HomeBillComponent',

  props: ['rates'],

  data: () => ({}),

  computed: {
    ...mapGetters(['infoBillGetter', 'commonCurrenciesGetter']),

    base(): number {
      return this.infoBillGetter / (this.rates['RUB'] / this.rates['EUR']);
    },
  },

  methods: {
    getCurrency(currency: number) {
      return Math.floor(this.base * this.rates[currency]);
    },
  },
});
</script>

<template>
  <div class="col s12 m6 l4">
    <v-card>
      <v-card-title>Счет в валюте</v-card-title>
      <v-simple-table>
        <thead>
          <tr>
            <th>Валюта</th>
            <th>Значение</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="cur of commonCurrenciesGetter" :key="cur">
            <td>{{ cur }}</td>
            <td>{{ getCurrency(cur) | currencyFilter(cur) }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
  </div>
</template>
