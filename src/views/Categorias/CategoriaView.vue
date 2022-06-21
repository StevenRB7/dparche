<template>
<!-- eslint-disable -->
  <div class="Categorias">
    <HeaderComponent/>
    <CarruselComponent/>
    <div class="justify-content-center row">
        <div class="col-8 card text-center ml-4 ml-sm-5 ml-lg-0">
          <div class="card-body">
     <h3 class="card-title mt-1 font-italic text-decoration-none " id="title-card">CATEGORIAS</h3>
    <div class="col-8 card text-center ml-4 ml-sm-5 ml-lg-0" id="card-form">
 <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                        <select name="Categoria" class="custom-select m-2" required>
                            <option value="">Tipo de Categoria</option>
                            <option value="restaurante">Restaurante</option>
                            <option value="bar">Bar</option>
                            <option value="cultura">Cultural</option>
                            <option value="discoteca">Dicoteca</option>
                            <option value="motel">Motel</option>
                        </select>
                      </div>
                      <form class="">
                          <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                            <textarea type="text" name="descripcion" maxlength="250" class="form-control m-2" placeholder="Descripción del Categoria Elegida" required></textarea>
                          </div>

                          


                          <button type="submit" class="btn btn-primary">Enviar </button>
                      </form>
               
          </div>
        </div>  
      </div>
      </div>
      <em><h4 class="bg-warning card-title mt-1 font-italic text-decoration-none " id="title-card">Mereces un descanso cuando las cosas estan dificiles..!!</h4></em>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import CarruselComponent from '@/components/CarruselComponent.vue'
export default {
  name: 'CategoriaView',
  components: {
    HeaderComponent,
    CarruselComponent
  }
}
</script>
