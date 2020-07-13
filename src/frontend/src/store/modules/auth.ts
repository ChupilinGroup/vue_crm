/*
https://vuecrm200711.firebaseio.com/
*/

import firebase from 'firebase/app';

import { ActionContext } from '@/interfaces/ActionContext.interface';
import { RegistrationData } from '@/interfaces/RegistrationData.interface';

const auth = {
  state: {},

  actions: {
    async loginAction(
      { dispatch, commit }: ActionContext,
      { email, password }: RegistrationData,
    ) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        throw error;
      }
    },

    async logoutAction() {
      await firebase.auth().signOut();
    },

    async registerAction(
      { dispatch }: ActionContext,
      { email, password, name }: RegistrationData,
    ) {
      console.log('email, password, name :>> ', email, password, name);
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUidAction');

        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 10000,
          name,
        });
      } catch (error) {
        throw error;
      }
    },

    getUidAction(): string | null {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
  },

  mutations: {},
  getters: {},
};

export default auth;
