<template>
  <div class="hello">
<header>
      <div>
        <b-navbar class="ver" toggleable="sm" type="dark">
          <img src="../assets/logoparche.png" alt="1" />

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav pills >
              <b-nav-item ><router-link  v-b-toggle.sidebar class="js" to="/"> EMPRESA</router-link> </b-nav-item>
              </b-navbar-nav>
            <b-navbar-nav>
              <b-nav-item ><router-link v-b-toggle.sidebar class="js" to="/"> EVENTOS</router-link> </b-nav-item>
              </b-navbar-nav>

              <b-navbar-nav>
              <b-nav-item ><router-link v-b-toggle.sidebar class="js" to="/"> LOGIN</router-link> </b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav>
            <b-nav-item href="#"><router-link class="js" to="/">PERFIL</router-link></b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <br />
      <b-sidebar id="sidebar-border" sidebar-class="border-right border-danger">
    </b-sidebar>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>
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

.boton1 {
  background-color: #198754;
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
