<template>
  <div >
    <b-carousel
      id="carousel-1"
      :interval="3000"
      background="#fffff"
      img-width="1024"
      img-height="200"
      style="text-shadow: 1px 1px 2px ;"
    >
      <b-carousel-slide>
        <template #img>
          <img
            :interval="2500"
            width="1240"
            height="200"
            src="../assets/ciclismo.jpg"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            :interval="2500"
            width="1240"
            height="200"
            src="../assets/piscina.jpg"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            :interval="2500"
            width="1240"
            height="200"
            src="../assets/tomar.jpg"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            :interval="2500"
            width="1240"
            height="200"
            src="../assets/naturaleza.jpg"
          >
        </template>
      </b-carousel-slide>
            <b-carousel-slide>
        <template #img>
          <img
            :interval="1500"
            width="1240"
            height="200"
            src="../assets/fiestabanner.jpg"
          >
        </template>
      </b-carousel-slide>

  </b-carousel>
  </div>
</template>

<script>

</script>
