<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      background="#ababab"
      img-width="1024"
      img-height="100"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide
         id="carousel-1"
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../assets/deparche3.png"
        img-width="1024"
      img-height="100"
      ></b-carousel-slide>

      <b-carousel-slide img-src="../assets/dparche.png"
            img-width="1024"
      img-height="100">

        <h1>Hello world!</h1>
      </b-carousel-slide>

      <b-carousel-slide
      class="d-block img-fluid w-100"
      img-src="../assets/dparcheotro.png"
      img-width="1024"
      img-height="100">
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
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
