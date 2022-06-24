<template>
  <div class="home">
    <HeaderComponent/>
    <CarruselComponent/>

<hr class="hr1">
<h1>EVENTOS</h1>
<div>
    <b-carousel
    vh-200
      id="carousel-1"
      v-model="slide"
      controls
      indicators
      background="#ffffff"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
        <template #img>
          <img
          :interval="2500"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/fiesta3.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with custom text -->
       <b-carousel-slide>
        <template #img>
          <img
          :interval="2500"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/fiest.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide>
         <template #img>
          <img
          :interval="2500"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/bolos.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
          :interval="2500"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/playa.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide>
        <template #img>
          <img
          :interval="2500"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/restoran.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>

<hr>
<h1>ENCUENTRANOS</h1>
<div>
  <section class="d-flex flex-wrap justify-content-evenly padre">
      <section class="col-xl-4 col-md-6 col-12 align-items-center mision">
        <h4 class="titulo">DESCARGA NUESTRA APLICACION AHORA MISMO</h4>
        <p class="texto">
          LINK DE PARCHE EN CONSTRUCCION
        </p>
        <img src="../assets/logocubo.png" alt="" class="col-xl-10 col-md-11 col-11"/>
      </section>
    </section>
  </div>

 <hr>
<h1>MAS SOBRE NOSOTROS</h1>
<section class="d-flex flex-wrap justify-content-evenly padre">
      <section class="col-xl-4 col-md-6 col-12 align-items-center mision">
        <h4 class="titulo">MISION</h4>
        <p class="texto">
          A raiz de nuestra aplicación buscamos que los aprendices sena CTPI busque diferentes alternativas de distracción y/o entretenimiento, que pueda ayudarles a "quemar energía" que es hacer que el aprendiz participe activamente en estos lugares y eventos, para así mantener un equilibrio entre en estudio o trabajo con su salud mental, ya que vemos que apartir de la pandemia este a sido afectada en un gran porcentaje
        </p>
        <img src="../assets/amigos.jpg" alt="" class="col-xl-10 col-md-11 col-11"/>
      </section>
      <section class="col-xl-4 col-md-6 col-12 align-items-center vision">
        <img src="../assets/fiesta.jpg" alt="" class="col-xl-10 col-md-11 col-11 imgvision"/>
        <h4 class="titulo">VISION</h4>
        <p class="texto">
          Lo que queremos lograr con esta aplicación es reducir la problematica psicosocial que se ha agravado a raiz de la pnademia como lo es el estre, teniendo como publico objetivo el Aprendiz CTPI buscamos que este mejore en sus actividades academica disminuyendo la cantidad de estres y depresión con nuestro aplicativo
        </p>
      </section>
    </section>
    <FooterComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import CarruselComponent from '@/components/CarruselComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  name: 'HomeView',
  components: {
    HeaderComponent,
    CarruselComponent,
    FooterComponent
  }
}
</script>

<style scoped>

.hr1 {
  color: azure;
}

h1 {
  color: #2196f3;
}

hr{
  color: #2196f3;
}
</style>
