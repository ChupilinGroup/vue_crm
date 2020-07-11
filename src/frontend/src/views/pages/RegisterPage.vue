<script lang="ts">
import Vue from 'vue';
import { email, required, minLength } from 'vuelidate/lib/validators';

export default Vue.extend({
  name: 'RegisterPage',

  data: () => ({
    valid: true,
    lazy: false,

    email: '',
    emailRules: [
      (v: string) => !!v || 'E-mail нужно заполнить',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail должен быть правильным',
    ],

    userName: '',
    userNameRules: [
      (v: string) => !!v || 'Имя пользователя нужно заполнить',
      (v: string) =>
        /^[a-z\s]+$/iu.test(v) || 'Должны быть только английские буквы',
      (v: string) =>
        // TODO: подумать как привязать Length
        (v && v.length >= 5) || `Длинна имени должна быть больше ${5} символов`,
    ],

    password: '',
    passwordShow: false,
    passwordLength: 4,
    passwordRules: [
      (v: string) => !!v || 'Password нужно заполнить',
      (v: string) =>
        // TODO: подумать как привязать passwordLength
        (v && v.length >= 4) ||
        `Длинна пароля должна быть больше ${4} символов`,
    ],

    checkbox: false,
    checkboxRules: [(v: string) => !!v || 'Просто согласись с неизбежностью!'],
  }),

  methods: {
    onSubmit() {
      console.log('onSubmit ');
      this.$router.push('/');
    },
  },
});
</script>

<template>
  <v-container class="container fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar class="title primary white--text" flat>
            <v-toolbar-title>Регистрация</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn class="primary white--text" to="/">X</v-btn>
          </v-toolbar>

          <v-card-text>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-text-field
                required
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                name="email"
                prepend-icon="mdi-email"
                type="text"
                v-model.trim="email"
              ></v-text-field>

              <v-text-field
                required
                v-model="password"
                :rules="passwordRules"
                counter
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                :type="passwordShow ? 'text' : 'password'"
                @click:append="passwordShow = !passwordShow"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
              ></v-text-field>

              <v-text-field
                required
                v-model="userName"
                :rules="userNameRules"
                counter
                label="Имя пользователя"
                name="userName"
                prepend-icon="mdi-account"
              ></v-text-field>

              <v-checkbox
                v-model="checkbox"
                :rules="checkboxRules"
                label="Вы согласны с правилами?"
                required
              ></v-checkbox>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              block
              class="primary white--text"
              :disabled="!valid"
              @click="onSubmit"
            >
              Регистрация
            </v-btn>
          </v-card-actions>

          <v-card-actions>
            <p class="card_register">
              Есть аккаунт?
              <v-btn text to="/Login">
                Войти
              </v-btn>
            </p>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.container {
  display: block;
}
.card_register {
  min-width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.v-card__actions {
  padding: 8px 16px;
}
</style>
