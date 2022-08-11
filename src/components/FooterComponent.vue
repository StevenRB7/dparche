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

<!-- <div class="conteiner sp">
<a class="mb-3"  href="https://es-la.facebook.com/" role="button"
  > <img  class="iconos" src="../assets/facebook.png" >
</a>
<a class="mb-6" href="https://www.instagram.com/" role="button"
  > <img  class="iconos" src="../assets/instagram.png" >
  </a>

<a class="mb-9" href="https://wa.me/message/EKPS4PAESNM4L1" role="button"
  > <img class="iconos" src="../assets/whatsapp.png">
  </a>
</div> -->

<div class="iconos1">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <ul>
    <li>
      <a href="https://es-la.facebook.com/"  target="_blank">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span  class="fa fa-facebook"></span>
      </a>
    </li>
    <li>
      <a href="https://wa.me/message/EKPS4PAESNM4L1"  target="_blank">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span  class="fa fa-whatsapp"></span>
      </a>
    </li>

    <li>
      <a href="https://www.instagram.com/" target="_blank">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span  class="fa fa-instagram"></span>
      </a>
    </li>
  </ul>

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
  background:  rgb(89, 165, 252);
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

/*  aplicaciones*/
*{
      margin: 0;
      padding: 0;
    }
.iconos1{
display: flex;
}
    ul{
      position: relative;
      display: contents;
      transform-style: preserve-3d;
      transform: rotate(-25deg) skew(25deg);
    }
    ul li{
      position: relative;
      list-style: none;
      width: 60px;
      height: 60px;
      margin: 0 10px;
    }
    ul li::before{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 10px;
      background: #333;
      transform-origin: top;
      transform: skewX(-41deg);
    }
    ul li::after{
      content: '';
      position: absolute;
      top: 0;
      left: -9px;
      width: 9px;
      height: 100%;
      background: #333;
      transform-origin: right;
      transform: skewY(-49deg);
    }
    ul li span{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex !important;
      justify-content: center;
      align-items: center;
      background: #2a2a2a;
      color: rgb(251, 248, 248);
      font-size: 30px !important;
      transition: 0.2s;
    }
    ul li:hover span{
      z-index: 1000;
      transition: 0.5s;
      color: #fff;
      box-shadow: -1px 1px 1px rgba(103, 18, 18, 0.05);
    }
    ul li:hover span:nth-child(5){
      transform: translate(40px, -40px);
      opacity: 1;
    }
    ul li:hover span:nth-child(4){
      transform: translate(30px, -30px);
      opacity: 0.8;
    }
    ul li:hover span:nth-child(3){
      transform: translate(20px, -20px);
      opacity: 0.6;
    }
    ul li:hover span:nth-child(2){
      transform: translate(10px, -10px);
      opacity: 0.4;
    }
    ul li:hover span:nth-child(1){
      transform: translate(0px, 0px);
      opacity: 0.2;
    }
    ul li:nth-child(1):hover span{
      background: #3b5999;
    }

    ul li:nth-child(2):hover span{
      background: #25d366;
    }

    ul li:nth-child(3):hover span{
      background: #e4405f;
    }

</style>
