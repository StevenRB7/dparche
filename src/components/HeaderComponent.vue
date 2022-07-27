<template>
  <div class="hello">
<header>
      <div class="item-wrap">
        <b-navbar  class="ver" toggleable="sm" type="dark">
          <img src="../assets/logofinal.png" alt="1" />

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  <ul>
      <li style="--clr:#014ba0">
      <router-link to="/"><a href="#" data-text="INICIO">&nbsp;INICIO&nbsp;</a></router-link>
      </li>
      <li style="--clr:#014ba0">
      <router-link to="/registroempresas"><a href="#" data-text="EMPRESAS">&nbsp;EMPRESAS&nbsp;</a></router-link>
      </li>
      <li style="--clr:#014ba0">
            <router-link to="/registroeventos"><a href="#" data-text="EVENTOS">&nbsp;EVENTOS&nbsp;</a></router-link>
      </li>
      <li style="--clr:#014ba0">
      <router-link to="/categorias"><a href="#" data-text="CATEGORIAS">&nbsp;CATEGORIAS&nbsp;</a></router-link>
      </li>
      <li style="--clr:#014ba0">
      <router-link to="/estadosanimo"><a href="#" data-text="ESTADOS DE ANIMO">&nbsp;ESTADOS DE ANIMO&nbsp;</a>
</router-link>
      </li>
      <li style="--clr:#014ba0">
      <b-link v-b-toggle.sidebar-border class="js"><a href="#" data-text="INICIAR SESION">&nbsp;INICIAR SESION&nbsp;</a>
      </b-link>
      </li>
    </ul>
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
 *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }
    body{
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #252839;
    }
    ul{
      position: relative;
      display: contents;
      flex-direction: column;
      gap: 30px;
    }
    ul li{
      position: relative;
      list-style: none;
    }
    ul li a{
      position: relative;
      font-size: 20px;
      text-decoration: none;
      line-height: 20px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color:rgba(255, 255, 255, 0.5);
      -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
    }
    ul li a::before{
      content: attr(data-text);
      position: absolute;
      color: var(--clr);
      width: 0;
      overflow: hidden;
      transition: 1s;
      border-right: 8px solid  var(--clr);
      -webkit-text-stroke: 1px  var(--clr);
    }
    ul li a:hover::before{
      width: 100%;
      filter: drop-shadow(0 0 25px var(--clr));
    }

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
