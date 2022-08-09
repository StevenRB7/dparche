<template>
  <!-- eslint-disable -->
  <div class="Categorias">
    <HeaderComponent />
    <CarruselComponent />
    <div class="row justify-content-center my-5">
      <div class="col-11 col-lg-8 offset-lg-0">

      <h1>CATEGORIAS</h1>

          <section class="d-flex flex-wrap justify-content-evenly padre">
            <section   class="borde col-xl-4 col-md-6 col-12 align-items-center mision">
            <h4 class="titulo">RESTAURANTE</h4>
             <p class="texto">
                Es un establecimiento de servicio, Hoy en día existe una gran variedad de modalidades de servicio y tipos de cocina, es uno de los lugares que más visitamos las personas para comer, beber y porque no también para celebrar y encontrarnos con amigos.   </p>
               <img src="../../assets/restaurante.jpg" alt="" class="col-xl-10 col-md-11 col-11"/>
            </section>
      <section  class="borde col-xl-4 col-md-6 col-12 align-items-center vision">
        <img src="../../assets/bar.jpg" alt="" class="col-xl-10 col-md-11 col-11 imgvision"/>
        <h4 class="titulo">BAR</h4>
        <p class="texto">
          Un bar es un lugar en donde se sirven bebidas alcohólicas, refrescos o infusiones. Algunos bares se organizan especialmente como lugares de encuentro entre conocidos y amigos, como espacios de interacción social.        </p>
      </section>
            </section>
             <section class="d-flex flex-wrap justify-content-evenly padre">
            <section  class="borde col-xl-4 col-md-6 col-12 align-items-center mision">
            <h4 class="titulo">CULTURA</h4>
             <p class="texto">
                Cultura se refiere al conjunto de bienes materiales y espirituales de un grupo social transmitido de generación en generación a fin de orientar las prácticas individuales y colectivas.  Incluye lengua, procesos, modos de vida, costumbres, tradiciones, hábitos, valores, patrones, herramientas y conocimiento.   </p>
               <img src="../../assets/cultura.jpg" alt="" class="col-xl-10 col-md-11 col-11"/>
            </section>
      <section  class="borde col-xl-4 col-md-6 col-12 align-items-center vision">
        <img src="../../assets/discoteca.jpg" alt="" class="col-xl-10 col-md-11 col-11 imgvision"/>
        <h4 class="titulo">DISCOTECA</h4>
        <p class="texto">
          Un bar es un lugar en donde se sirven bebidas alcohólicas, refrescos o infusiones. Algunos bares se organizan especialmente como lugares de encuentro entre conocidos y amigos, como espacios de interacción social.        </p>
      </section>
       </section>
             <section class="d-flex flex-wrap justify-content-evenly padre">
            <section  class="borde col-xl-4 col-md-6 col-12 align-items-center mision">
            <h4 class="titulo">MOTEL</h4>
             <p class="texto">
                Lo que de verdad caracteriza a estos establecimientos es la intimidad que ofrecen al huésped.  se suele acceder directamente por el garaje individual a la habitación asegurando la máxima privacidad. Tambien los moteles pueden ser una opción buena y barata para hospedarse por un rato.   </p>
               <img src="../../assets/Motel.jpg" alt="" class="col-xl-10 col-md-11 col-11"/>
            </section>
      <section  class="borde col-xl-4 col-md-6 col-12 align-items-center vision">
        <img src="../../assets/recreacion.jpg" alt="" class="col-xl-10 col-md-11 col-11 imgvision"/>
        <h4 class="titulo">RECREACION</h4>
        <p class="texto">
          Como recreación se denomina la actividad destinada al aprovechamiento del tiempo libre para el esparcimiento físico y mental, realizado de forma individual o grupal.
Factor de formación de niños y adolescentes, vinculándose como modos de estimulación y aprendizaje.</p>
      </section>
            </section>
      </div>
    </div>
        <FooterComponent />
  </div>
</template>

<script>

// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import CarruselComponent from '@/components/CarruselComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'CategoriaView',
  components: {
    HeaderComponent,
    CarruselComponent,
    FooterComponent

  }
}

</script>
<style scoped>
.borde {
  margin-top: 3%;
  border: 3px solid rgb(89, 165, 252);
  border-radius: 10px;
}
h1 {
  color: #2196f3;
}

</style>
