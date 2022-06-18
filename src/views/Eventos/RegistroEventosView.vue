<template>
  <div class="Eventos">
    <HeaderComponent/>
<!-- eslint-disable -->
    <div class="row justify-content-center my-5">
        <div class="col-11 col-lg-8 offset-lg-0">
            <div class="card text-center ml-4 ml-sm-5 ml-lg-0" id="card-form">
                <div class="card-body justify-content-center border border-primary rounded">
                    <h1 class="card-title mt-1" id="title-card">Formulario Eventos</h1>
                    <div class="container">
                        <form action="" method="post">
                            <div class="row my-5 ">
                                <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <h3 class="card-title mt-1" id="title-card">Nombre del Evento</h3>
                                </div>
                                <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <input type="text" name="nombre" maxlength="100" class="form-control text-center"
                                        placeholder="Nombre del Evento" required>
                                </div>
                                <div class="form-group my-4 col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <h3 class="card-title mt-1" id="title-card">Imagen del Evento</h3>
                                </div>
                                <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <input type="file" class="custom-file-input" id="customFileLang" required>
                                    <label class="custom-file-label mt-1" for="customFileLang" >Seleccionar Archivo</label>
                                </div>
                                <div class="form-group my-3 col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <h3 class="card-title mt-1" id="title-card">Direccion del Evento</h3>
                                </div>
                                <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <input type="text" name="direccion" maxlength="100" class="form-control text-center"
                                        placeholder="Direccion" required>
                                </div>  
                                <div class="form-group my-3 col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                                    <div class="card-body  justify-content-center">
                                        <h3 class="card-title " id="title-card">Detalles del Evento</h3>
                                    </div>
                                    <textarea name="descripcion" placeholder="Escribe aquí..." class="form-control"
                                        rows="5" cols="70" required></textarea>
                                </div>
                                
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-sm-8 mt-2 mb-4">
                                    <button type="submit" name="button" class="btn btn-dark w-100">Guardar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <CarruselComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import CarruselComponent from '@/components/CarruselComponent.vue'
export default {
  name: 'RegistroEventosView',
  components: {
    HeaderComponent,
    CarruselComponent
  }
}
</script>
