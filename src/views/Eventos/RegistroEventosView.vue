<template>
  <div class="Eventos">
    <HeaderComponent/>
        <CarruselComponent/>

<!-- eslint-disable -->
    <div class="row justify-content-center my-5">
        <div class="col-11 col-lg-8 offset-lg-0">
            <div class="card text-center ml-4 ml-sm-5 ml-lg-0" id="card-form">
                <div class="card-body justify-content-center border border-primary rounded">
                    <h1 class="card-title mt-1" id="title-card">Formulario Eventos</h1>
                    <div class="container">
                        <form action="" method="POST">
                            <div class="row my-5 ">
                                <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <h3 class="card-title mt-1" id="nombre" name="nombre">Nombre del Evento</h3>
                                </div>
                                <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <input v-model="form.nombre" type="text" name="nombre" maxlength="100" class="form-control text-center"
                                        placeholder="Nombre del Evento" required>
                                </div>
                                <div class="form-group my-4 col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <h3 class="card-title mt-1" id="title-card">Imagen del Evento</h3>
                                </div>
                                <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <input  type="file" name="imagen" class="custom-file-input" id="imagen" required>
                                    <label v-model="form.imagen" class="custom-file-label mt-1" for="customFileLang" ></label>
                                </div>
                                <div class="form-group my-3 col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <h3 for="example-datepicker">Fecha Del Evento</h3>
                                    <b-form-datepicker id="example-datepicker" v-model="form.fecha" class="mb-2" placeholder="Digita la fecha de tu evento"></b-form-datepicker>
                                </div>
                                <div class="form-group my-3 col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <h3 class="card-title mt-1" id="direccion">Direccion del Evento</h3>
                                </div>
                                <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <input v-model="form.direccion" name="direccion" id="direccion" type="text" maxlength="100" class="form-control text-center"
                                        placeholder="Escribe la direccion de tu evento" required>
                                </div>  
                                <div class="form-group my-3 col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <div class="card-body  justify-content-center">
                                        <h3 class="card-title " id="descripcion">Detalles del Evento</h3>
                                    </div>
                                    <textarea v-model="form.descripcion" name="descripcion" type="text" placeholder="Detallanos tu evento" class="form-control"
                                        rows="5" cols="70" required></textarea>
                                </div>
                                
                            </div>
                            <div class="row justify-content-center">
                                <input
                                   class="col-sm-8 mt-2 mb-4 btn btn-primary"
                                   v-on:click="AgregarEventos()"
                                   type="button"
                                   value="Registrar"
                                   
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <FooterComponent/>

  </div>
</template>

<script>

/* eslint-disable */ 

import axios from 'axios'
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import CarruselComponent from '@/components/CarruselComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'RegistroEventosView',
  components: {
    HeaderComponent,
    CarruselComponent,
    FooterComponent
  },

  data() {
    return {
        form: {
         nombre: "",
         imagen: "",
         descripcion: "",
         fecha: "",
         direccion: "",
        },
    };
  },

  mounted() {
    // this.AgregarEventos();
  },

 methods: {
    AgregarEventos() {
       axios
        .post("https://deparche-api.herokuapp.com/api/nuevo_evento", this.form, {
            validateStatus: function (status) {
            return status < 500; // Resuelve solo si el código de estado es menor que 500
        }
        })
        .then((response) => {
            this.$router.push('/')
          console.log(response);
        });
    },
  },
};
</script>
