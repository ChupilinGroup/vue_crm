<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

import LoaderComponent from '../../components/LoaderComponent.vue';

import { Info } from '../../interfaces/Info.interface';

export default Vue.extend({
  name: 'ProfilePage',
  metaInfo: {
    title: 'Профиль',
  },

  components: {
    LoaderComponent,
  },

  data: () => ({
    loading: true,

    valid: false,

    name: null,
    nameRules: [
      (v: string) => !!v || 'Имя пользователя нужно заполнить',
      (v: string) =>
        /^[a-z\s]+$/iu.test(v) || 'Должны быть только английские буквы',
      (v: string, textMin: number = 4) =>
        (v && v.length >= textMin) ||
        `Длинна имени должна быть больше ${textMin} символов`,
      (v: string, textMax: number = 30) =>
        (v && v.length <= textMax) ||
        `Хорош! Не льсти себе, максимум ${textMax} символов`,
    ],

    bill: null,
    billRules: [
      (v: string) => !!v || 'Это поле нужно заполнить',
      (v: string) =>
        /^\d+(?:[\.,]\d+)?$/.test(v) ||
        'Это поле должно содержать только числа',
    ],
  }),

  created() {},

  async mounted() {
    this.checkAvailabilityData();

    this.loading = false;

    this.name = this.infoUserNameGetter;
    this.bill = this.infoBillGetter;
  },

  computed: {
    ...mapGetters(['infoBillGetter', 'infoUserNameGetter']),
  },

  methods: {
    ...mapActions(['infoUpdateAction']),

    updateProfile() {
      const name: string | any = this.name;
      const bill: number | any = Number(this.bill);
      this.infoUpdateAction({ name, bill });
    },

    async checkAvailabilityData() {
      if (await !this.$store.getters.uidGetter) {
        await this.$store.dispatch('fetchInfoAction');
      }
    },
  },
});
</script>

<template>
  <LoaderComponent v-if="loading" />

  <div v-else-if="!loading">
    <v-card-title>
      Профиль
      <v-spacer></v-spacer>
      {{
        bill
          | currencyFilter({
            style: 'currency',
            currency: 'byn',
            maximumFractionDigits: 2,
          })
      }}
    </v-card-title>

    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model.trim="name"
        label="Име пользователя"
        counter
        required
        :rules="nameRules"
      ></v-text-field>

      <v-text-field
        v-model.number="bill"
        label="Счет"
        required
        :rules="billRules"
      ></v-text-field>

      <v-card-actions class="justify-center">
        <v-btn text :disabled="!valid" @click="updateProfile()">
          <v-icon left>mdi-refresh</v-icon>
          Обновить
        </v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>
