<template>
  <!-- eslint-disable -->
  <div class="Categorias">
    <HeaderComponent />
    <CarruselComponent />
    <div class="row justify-content-center my-5">
      <div class="col-11 col-lg-8 offset-lg-0">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="views/Categoria/css/style.css">
    <title>rotacion de letras</title>
</head>
<body>
    <div class="efecto"> 
        <p> CATEGORIAS</p>
        <div class="nombre">
          
            <span>Restaurante</span>
            <span>Bar</span>
            <span>Cultura</span>
            <span>Discoteca</span>
            <span>Motel</span>
            <span>Recreacion</span>


        </div>

    </div>
</body>
          <section class="d-flex flex-wrap justify-content-evenly padre">
            <section   class="card borde col-xl-4 col-md-6 col-12 align-items-center mision">
            <h4 class="titulo">RESTAURANTE</h4>
             <p class="texto">
                Es un establecimiento de servicio, Hoy en día existe una gran variedad de modalidades de servicio y tipos de cocina, es uno de los lugares que más visitamos las personas para comer, beber y porque no también para celebrar y encontrarnos con amigos.   </p>
               <img src="../../assets/restaurante.jpg" alt="" class="col-xl-10 col-md-11 col-11"/>
        </section>
      <section  class="card borde col-xl-4 col-md-6 col-12 align-items-center vision">
        <img src="../../assets/bar.jpg" alt="" class="col-xl-10 col-md-11 col-11 imgvision"/>
        <h4 class="titulo">BAR</h4>
        <p class="texto">
          Un bar es un lugar en donde se sirven bebidas alcohólicas, refrescos o infusiones. Algunos bares se organizan especialmente como lugares de encuentro entre conocidos y amigos, como espacios de interacción social.        </p>
      </section>
            </section>
             <section class="d-flex flex-wrap justify-content-evenly padre">
            <section  class="card borde col-xl-4 col-md-6 col-12 align-items-center mision">
            <h4 class="titulo">CULTURA</h4>
             <p class="texto">
                Cultura se refiere al conjunto de bienes materiales y espirituales de un grupo social transmitido de generación en generación a fin de orientar las prácticas individuales y colectivas.  Incluye lengua, procesos, modos de vida, costumbres, tradiciones, hábitos, valores, patrones, herramientas y conocimiento.   </p>
               <img src="../../assets/cultura.jpg" alt="" class="col-xl-10 col-md-11 col-11"/>
            </section>
      <section  class="card borde col-xl-4 col-md-6 col-12 align-items-center vision">
        <img src="../../assets/discoteca.jpg" alt="" class="col-xl-10 col-md-11 col-11 imgvision"/>
        <h4 class="titulo">DISCOTECA</h4>
        <p class="texto">
          Un bar es un lugar en donde se sirven bebidas alcohólicas, refrescos o infusiones. Algunos bares se organizan especialmente como lugares de encuentro entre conocidos y amigos, como espacios de interacción social.        </p>
      </section>
       </section>
             <section class="d-flex flex-wrap justify-content-evenly padre">
            <section  class="card borde col-xl-4 col-md-6 col-12 align-items-center mision">
            <h4 class="titulo">MOTEL</h4>
             <p class="texto">
                Lo que de verdad caracteriza a estos establecimientos es la intimidad que ofrecen al huésped.  se suele acceder directamente por el garaje individual a la habitación asegurando la máxima privacidad. Tambien los moteles pueden ser una opción buena y barata para hospedarse por un rato.   </p>
               <img src="../../assets/Motel.jpg" alt="" class="col-xl-10 col-md-11 col-11"/>
            </section>
      <section  class="card borde col-xl-4 col-md-6 col-12 align-items-center vision">
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
/* tarjetas de animacion */
.card:hover{
box-shadow: 5px 5px 30px rgb(89, 165, 252);
transform: translateY(-3%);
}
h1 {
  color: #2196f3;
}
*,
*:before,
*:after{
    padding: 0;
    margin:  0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

.efecto{
    box-sizing: content-box;
    height: 70px;
    padding: 25px 300px;
    display: flex;
    box-shadow: 0px 10px  20px #2196f3;
        font-size: 55px;
}
/* @keyframes hi{
    10%{
        transform: translateX(-110%);
    }
    25%{
        transform: translateX(-80%);
    }
    35%{
        transform: translateZ(-212%);
    }
    50%{
        transform: translateZ(-200%);
    }
    60%{
        transform: translateZ(-312%);
    }
    75%{
        transform: translateY(-300%);
    }
    85%{
        transform: translateZ(-412%);
    }
    100%{
        transform: translateZ(-400%);
    }

} */
.nombre{
    overflow: hidden;
}

span{
    display: block;
    height: 100px;
    padding-left: 10px;
    color: #2196f3;
    border: 0px solid rgb(15, 15, 15);
    animation: spin_words 6s infinite;
}

@keyframes spin_words {
        10%{
            transform: translateY(-110%);
        }
        25%{
            transform: translateY(-80%);
        }
        35%{
            transform: translateY(-212%);
        }
        50%{
            transform: translateY(-200%);
        }
        60%{
            transform: translateY(-312%);
        }
        75%{
            transform: translateY(-300%);
        }
        85%{
            transform: translateY(-412%);
        }
        100%{
            transform: translateY(-400%);
        }
}
</style>
