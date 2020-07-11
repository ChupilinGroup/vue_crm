import firebase from 'firebase/app';

const auth = {
  state: {},

  actions: {
    async loginAction({ dispatch, commit }: any, { email, password }: any) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        console.log('error :>> ', error);
        throw error;
      }
    },

    async logoutAction() {
      await firebase.auth().signOut();
    },
  },

  mutations: {},

  getters: {},
};

export default auth;
