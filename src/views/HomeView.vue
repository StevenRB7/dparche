<template>
  <div class="home">
    <HeaderComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent
  }
}
</script>
