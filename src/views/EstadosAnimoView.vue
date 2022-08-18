<template>
  <div class="home">
    <HeaderComponent />
    <CarruselComponent />
    <b-container>
      <b-row class="text-center">
        <b-col md="12" class="py-3">
          <b-button
            class="btnlist"
            v-b-tooltip.hover="'Lista de Usuarios'"
            variant="outline-light "
            >Lista de Usuarios</b-button
          >
        </b-col>
      </b-row>
    </b-container>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Usuario</th>
          <th scope="col">Estado de Animo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in dataStatusGet" :key="index">
          <td>{{ user.idCorreo }}</td>
          <td>{{ user.usuario }}</td>
          <td>{{ user.estado }}</td>
        </tr>
        <!-- <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Feliz</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>Enojado</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Larry</td>
      <td>Enojado</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>zzzz</td>
      <td>Triste</td>
    </tr> -->
      </tbody>
    </table>

    <FooterComponent />
  </div>
</template>

<script>
/* eslint-disable */

import HeaderComponent from "@/components/HeaderComponent.vue";
import CarruselComponent from "@/components/CarruselComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import axios from "axios";
import { db } from "@/firebase/init.js";

export default {
  name: "EstadosAnimoView",
  components: {
    HeaderComponent,
    CarruselComponent,
    FooterComponent,
  },

  data() {
    return {
      usuarios: {
        id: "",
        mail: "",
        nombre: "",
      },

      dataUsers: [],
      dataStatusGet: [],
    };
  },

  mounted() {
    this.verUsuarios();
    this.getStatus();
  },
  methods: {
    verUsuarios() {
      axios
        .get(
          "https://deparche-51e93-default-rtdb.firebaseio.com/User.json?print=pretty"
        )
        .then((rows) => {
          return rows.data;
        })
        .then((responseTwo) => {
          this.dataUsers = responseTwo;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getStatus() {
      let listStatus = [];
      db.collection("Estados De Animo")
        .get()
        .then(function (result) {
          result.forEach(function (status) {
            listStatus.push(status.data());
          });
          return listStatus;
        })
        .then((response) => {
        this.dataStatusGet = response;

        });
    },
  },
};
</script>

<style scoped>
.py-3 {
  color: rgb(255, 255, 255);
  outline-color: rgb(100, 162, 255);
}
.btnlist {
  color: rgb(255, 255, 255);
  background-color: rgb(65, 119, 254);
  border-color: blue;
}
</style>
