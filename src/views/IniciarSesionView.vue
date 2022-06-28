<template>
  <div>
    <b-sidebar id="sidebar-border" sidebar-class="border-right border-danger">
      <b-card
        header-bg-variant="primary"
        text-variant="white"
        header="INICIAR SESION"
        class="text-center"
      >
        <b-card-text>
          <form class="formulario">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Correo</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text formulario">
                No compartas tus datos con nadie.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Contraseña</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Recuerdame</label
              >
            </div>

            <div class="botonesIS">
              <b-button
                pill
                variant
                type="submit"
                class="boton1 btn-primary d-grid gap-2 col-6 mx-auto"
                >Ingresar</b-button
              >
            </div>
          </form>
        </b-card-text>
      </b-card>
    </b-sidebar>
     <FooterComponent/>
  </div>
</template>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'InicioSesion',
  components: {
    // HelloWorld
    FooterComponent
  }
}
</script>

<style scoped>
.inicio {
  margin-top: 5%;
  /* border: 3px solid #2E86C1; */
  /* border-radius: 50px; */
  padding: 20px;
}

.formulario {
  color: black;
}

.boton1 {
  background-color: rgb(89, 165, 252);
}

.boton2 {
  background-color: rgb(89, 165, 252);
}
</style>