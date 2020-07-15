<script lang="ts">
import Vue from 'vue';

import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'HomeCurrencyComponent',

  props: ['rates', 'date'],

  data: () => ({}),

  computed: {
    ...mapGetters(['commonCurrenciesGetter']),
  },
});
</script>

<template>
  <div class="col s12 m6 l8">
    <v-card>
      <v-card-title>Курс валют</v-card-title>

      <v-simple-table>
        <thead>
          <tr>
            <th>Валюта</th>
            <th>Курс</th>
            <th>Дата</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="cur in commonCurrenciesGetter" :key="cur">
            <td>{{ cur }}</td>
            <td>{{ rates[cur].toFixed(5) }}</td>
            <td>{{ date | date('date') }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
  </div>
</template>
