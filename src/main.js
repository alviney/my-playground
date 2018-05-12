// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import firebase from 'firebase';

Vue.config.productionTip = false;

// Initialize Firebase
let app;
var config = {
  apiKey: "AIzaSyDaURFRJ0EEYZfNaYE0etBtbIRsRsNAeAE",
  authDomain: "my-playground-aa0c7.firebaseapp.com",
  databaseURL: "https://my-playground-aa0c7.firebaseio.com",
  projectId: "my-playground-aa0c7",
  storageBucket: "",
  messagingSenderId: "36083343952"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
    });
  }
});


