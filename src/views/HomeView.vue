<template>
  <div class="home">
    <HeaderComponent/>
    <CarruselComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import CarruselComponent from '@/components/CarruselComponent.vue'
export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    CarruselComponent
  }
}
</script>
