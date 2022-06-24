<template>
  <div>
    <footer>
      <div class="footer-content">
        <marquee behavior="scroll"
          >EL UNICO MODO DE HACER UN GRAN TRABAJO ES AMAR LO QUE HACES
          <br>
          Steve Jobs
        </marquee>
        <h3>D'Parche</h3>
        <h4><router-link class="sj" to="/vistaAyuda">Contactanos</router-link></h4>
        <p>La Paciencia Es Una Gran Virtud</p>
      </div>
      <div class="footer-bottom">
        <p>copyright &copy;2022 @D'Parche.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>

footer {
  position: relative;
  background: rgb(51, 154, 223);
  height: auto;
  font-family: "Open Sans";
  padding-top: 40px;
  color: #fff;
  margin-top: 100px;
}
.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.footer-content h3 {
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 3rem;
}
.footer-content p {
  max-width: 500px;
  margin: 10px auto;
  line-height: 28px;
  font-size: 14px;
}
.footer-bottom {
  background: #000;
  padding: 20px 0;
  text-align: center;
}
.footer-bottom p {
  font-size: 14px;
  word-spacing: 2px;
  text-transform: capitalize;
}

.footer-bottom span {
  text-transform: uppercase;
  opacity: 0.4;
  font-weight: 200;
}
.sj{
     list-style: none;
     text-decoration: none;
     color: #ffff;
}
</style>
