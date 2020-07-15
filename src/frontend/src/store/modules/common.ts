/*
https://fixer.io/quickstart
*/

import { ActionContext } from '@/interfaces/ActionContext.interface';

const common = {
  state: {
    currencies: ['BYN', 'USD', 'RUB', 'EUR'],
  },

  actions: {
    async commonFetchCurrency({ getters }: ActionContext) {
      const key: string = process.env.VUE_APP_FIXER;
      const symbols = getters.commonCurrenciesGetter;
      const URL =
        `http://data.fixer.io/api/latest?access_key=${key}` +
        `&symbols=${symbols}`;
      const res = await fetch(URL);
      return await res.json();
    },
  },

  mutations: {},

  getters: {
    commonCurrenciesGetter: (state: any) => state.currencies,
  },
};

export default common;
