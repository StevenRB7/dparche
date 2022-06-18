<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="1500"
      background="#c2c2c2"
      img-width="1024"
      img-height="100"
      style="text-shadow: 1px 1px 2px ;"
    >
      <b-carousel-slide
         id="carousel-1"
        caption="-_-"
        text="TOca arreglar."
        img-src="../assets/deparche3.png"
        img-width="1024"
      img-height="100"
      ></b-carousel-slide>

      <b-carousel-slide
      img-src="../assets/dparche.png"
      img-width="1024"
      img-height="100">

        <h1>Carrusel!</h1>
      </b-carousel-slide>

      <b-carousel-slide
      img-src="../assets/dparcheotro.png"
      img-width="1024"
      img-height="100">
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            width="1024"
            height="100"
            src="../assets/logoparche.png"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide
      class="d-block img-fluid w-100"
      caption="Blank Image"
      img-width="1024"
      src="../assets/logoparche.png"
      img-height="100">

      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>

</script>
