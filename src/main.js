
// eslint-disable-next-line
/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/js/dist/carousel'
import 'bootstrap-vue/dist/bootstrap-vue'

import axios from 'axios'
import VueAxios from 'vue-axios'


import VWave from 'v-wave'
import Ripple from 'vue-material-design-ripple'
import 'vue-material-design-ripple/dist/vue-material-design-ripple.css'


// const express = require('express');
// const app = express();
// const multer = require('multer');
// const mimeTypes = require('mime-types');


// const storage = multer.diskStorage({
//   destination: 'assets/',
//   filename: function(req,file,cb){
//     cb("",Date.now() + file.originalname + "." + mimeTypes.extension(file.mimetype));
//   }
// })

// const upload = multer({
//   storage: storage
// })

// app.get("/registroeventos",(req,res) => {
//   console.log(__dirname)
//   res.sendFile(__dirname + '/views/Eventos/EstadosAnimoView.vue');

// })

// app.post("/files",upload.single('imagen'),(req,res) => {
// res.send("Todo god")
// })

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD3A_gRwp7S5HDnUUl6swPtA5KNG8oC5w0",
//   authDomain: "deparche-51e93.firebaseapp.com",
//   databaseURL: "https://deparche-51e93-default-rtdb.firebaseio.com",
//   projectId: "deparche-51e93",
//   storageBucket: "deparche-51e93.appspot.com",
//   messagingSenderId: "1033907722426",
//   appId: "1:1033907722426:web:3a2534338c5b2ed8548a83",
//   measurementId: "G-KKTL7BPSZC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

// const querySnapshot = await getDocs(collection(db, "Estados De Animo"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';


// const firebaseConfig = { // Have the firebase config here
//   apiKey: "AIzaSyD3A_gRwp7S5HDnUUl6swPtA5KNG8oC5w0",
//   authDomain: "deparche-51e93.firebaseapp.com",
//   databaseURL: "https://deparche-51e93-default-rtdb.firebaseio.com",
//   projectId: "deparche-51e93",
//   storageBucket: "deparche-51e93.appspot.com",
//   messagingSenderId: "1033907722426",
//   appId: "1:1033907722426:web:3a2534338c5b2ed8548a83",
//   measurementId: "G-KKTL7BPSZC"
// };

// // Use this to initialize the firebase App
// var firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// var db = firebaseApp.firestore();
// var auth = firebase.auth();


// export { auth, db };

// // leer datos
// var tabla = document.getElementById('tabla');
// db.collection("Estados De Animo").onSnapshot((querySnapshot) => {
//   tabla.innerHTML = '';
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data().usuario}`);
//     tabla.innerHTML += `
//     <tr>
//     <th scope="row">${doc.id}</th>
//     <td>${doc.data().usuario}</td>
//     <td>${doc.data().estado}</td>
//     </tr>
//     `
//   });
// });

// db.collection("Estados de Animos").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data}`);
//   })
// });

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VWave)
Vue.directive('ripple', Ripple)
Vue.use(VueAxios, axios)

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

