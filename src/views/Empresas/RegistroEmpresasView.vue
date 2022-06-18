<template>
  <div class="Empresas">
    <HeaderComponent/>
    <CarruselComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import CarruselComponent from '@/components/CarruselComponent.vue'
export default {
  name: 'RegistroEmpresasView',
  components: {
    HeaderComponent,
    CarruselComponent
  }
}
</script>
