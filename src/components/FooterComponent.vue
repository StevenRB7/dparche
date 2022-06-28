<template>
  <div>
    <footer>
      <div class="footer-content">
        <marquee behavior="scroll"
          >EL UNICO MODO DE HACER UN GRAN TRABAJO ES AMAR LO QUE HACES
          <br>
          Steve Jobs
        </marquee>
        <br>

<div class="conteiner sp">
<a class="mb-3"  href="https://es-la.facebook.com/" role="button"
  > <img  class="iconos" src="../assets/facebook.png" >
</a>
<a class="mb-6" href="https://www.instagram.com/" role="button"
  > <img  class="iconos" src="../assets/instagram.png" >
  </a>

<a class="mb-9" href="https://wa.me/message/EKPS4PAESNM4L1" role="button"
  > <img class="iconos" src="../assets/whatsapp.png">
  </a>
</div>
<br>
        <h3 class="d">D'Parche</h3>
        <h6><router-link class="sj d" to="/">Contactanos: 3163514576</router-link></h6>
        <h6 class="d">La Paciencia Es Una Gran Virtud</h6>
      </div>
      <div class="footer-bottom ">
        <p class="d" href="/" to="/" >copyright &copy;2022 @D'Parche. </p>
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
  background:  rgb(51, 154, 223);
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
.iconos{
  width: 30px;
  height: 30px;
  margin-left: 40px;
}
.d{
margin-left: 50px;}

</style>
