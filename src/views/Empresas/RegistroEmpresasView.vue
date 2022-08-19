<template>
<!-- eslint-disable -->
  <div class="Empresas">
    <HeaderComponent/>
        <CarruselComponent/>
 <b-container>
      <b-row class="text-center">
        <b-col md="12" class="py-3">
        </b-col>
      </b-row>
      <h3 class="font-weight-bold text-primary">Tabla Intereses</h3>
    </b-container>
    <table class="table table-bordered " style="width: 80%" align="center">
      <thead>
        <tr class="bg-primary text-white" >
          <th scope="col">Id</th>
          <th scope="col">Usuario</th>
          <th scope="col">Intereses</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in dataStatusGet" :key="index">
          <td>{{ user.idCorreo }}</td>
          <td>{{ user.usuario }}</td>
          <td>{{ user.interes }}</td>
          <td>
              <form name="from" @submit.prevent="Eliminar(key.index)">
                  <!-- <router-link
                    :to="{
                      name: 'EditProgramacionView',
                      params: { id: programacion.id },
                    }"
                    class="btn btn-outline-info"
                    ><i class="fa-solid fa-pen-to-square"></i
                  ></router-link> -->
                  <button type="input" class="btn btn-outline-danger">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </form>
              </td>
        </tr>
      </tbody>
    </table>

    <FooterComponent />
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
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
      db.collection("Intereses")
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
