<template>
  <div class="hello">
<header>
      <div class="item-wrap">
        <b-navbar  class="ver" toggleable="sm" type="dark">
          <img src="../assets/logofinal.png" alt="1" />
           <b-navbar-nav >
              <b-nav-item  class="lg" ><router-link v-b-toggle.sidebar class="js"  to="/">INICIO</router-link> </b-nav-item>
            </b-navbar-nav>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav pills >

              <b-nav-item class="clickme-text" :style="{color}" v-ripple="{center,class: rippleClass}"  ><router-link  v-b-toggle.sidebar class="js" to="/registroempresas">EMPRESAS</router-link> </b-nav-item>
              </b-navbar-nav>
            <b-navbar-nav>
              <b-nav-item  class="clickme-text" :style="{color}" v-ripple="{center,class: rippleClass}" ><router-link v-b-toggle.sidebar class="js" to="/registroeventos"> EVENTOS</router-link> </b-nav-item>
              </b-navbar-nav>
            <b-navbar-nav>
            <b-nav-item  class="clickme-text" :style="{color}" v-ripple="{center,class: rippleClass}" href="#"><router-link class="js" to="/categorias">CATEGORIAS</router-link></b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
            <b-nav-item  class="clickme-text" :style="{color}" v-ripple="{center,class: rippleClass}" href="#"><router-link class="js" to="/estadosanimo">ESTADOS DE ANIMO</router-link></b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
              <b-nav-item  class="clickme-text" :style="{color}" v-ripple="{center,class: rippleClass}"  ><b-link v-b-toggle.sidebar-border class="js">INICIAR SESION</b-link></b-nav-item>
            </b-navbar-nav>
            <!-- <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul> -->
          </b-collapse>
          <b-nav-form>
            <form class="conteiner-fluid">
            </form>
          </b-nav-form>
        </b-navbar>
      </div>
      <br />
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
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String,
    rippleClass: { type: String }

  }
}
</script>

<style scoped>

.ver{
  overflow: hidden;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);
}
.clickme-text {
  color: inherit;
  flex:  100 auto;
  justify-content: inherit;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  cursor: pointer;
  user-select: none;
    bottom: 0;
  position: relative !important;
}
.clickme-text:hover:before {
  opacity: 0.10;
}
.clickme-text:active:before {
  opacity: 100;
}
.hash {
  color: currentColor;
  opacity: 0.3;
}
.item-wrap {
  padding:  1px;
  box-sizing: border-box;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ver {
  background-color: rgb(89, 165, 252);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #c3d6ff;
}
.hello {
  color: #47c5ff;
}

.inve {
  display: flex;
}
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
  background-color: #3175ce;
}

.boton2 {
  background-color: #761212c1;
}

.js{
  list-style: none;
  text-decoration: none;
  color:rgb(255, 255, 255);;
}
.sj{
     list-style: none;
     text-decoration: none;
}
</style>
