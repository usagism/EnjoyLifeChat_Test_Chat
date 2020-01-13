import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'

// // Required for side-effects
require("firebase/firestore");



//   // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDTfMxB9xlbs4YrNv53qb-3soubQ3R27tU",
    authDomain: "enjoylifechat-vue.firebaseapp.com",
    databaseURL: "https://enjoylifechat-vue.firebaseio.com",
    projectId: "enjoylifechat-vue",
    storageBucket: "enjoylifechat-vue.appspot.com",
    messagingSenderId: "154548455427",
    appId: "1:154548455427:web:7c83d7065c44d0aaf2e636"
  };
//   // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  window.db= db;


// db.settings({
//   timestampsInSnapshots: true
// });


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
