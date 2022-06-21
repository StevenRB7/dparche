<template>
<!-- eslint-disable -->
  <div class="Empresas">
    <HeaderComponent/>
      <div class="justify-content-center row">
        <div class="col-8 card text-center ml-4 ml-sm-5 ml-lg-0">
          <div class="card-body">
            <h3 class="card-title mt-1 font-italic text-decoration-none " id="title-card">Registro Empresa</h3>
              <div class="container">
                  <form class="">
                      <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                        <input type="text" class="form-control m-2" id="nombre" placeholder="Nombre" name="nombre" required>
                      </div>
                      <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                        <input type="text" class="form-control m-2" id="apellido" placeholder="Apellido" name="apellido" required>
                      </div>
                      <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                        <select name="Tipodocumento_idTipodocumento" class="custom-select m-2" required>
                            <option value="">Tipo de documento</option>
                            <option value="nit">Nit</option>
                            <option value="bar">Cedula de ciudadania</option>
                            <option value="cultura">Cultural</option>
                            <option value="discoteca">Dicoteca</option>
                            <option value="motel">Motel</option>
                        </select>
                      </div>
                      <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                        <input type="number" class="form-control m-2" id="nit" placeholder="Identificacion" name="nit" required> 
                      </div>
                      <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                        <input type="text" class="form-control m-2" id="ubicacion" placeholder="Direccion" name="ubicacion" required>
                      </div>
                      <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                        <textarea type="text" name="descripcion" maxlength="250" class="form-control m-2" placeholder="Descripción del Lugar" required></textarea>
                      </div>
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
                      <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                        <input type="number" class="form-control m-2" id="telefono" placeholder="Numero de telefono" name="telefono" required> 
                      </div>
                      <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                        <input type="email" class="form-control m-2" id="email" placeholder="Correo de la Empresa" name="email" required>
                      </div>
                      <div class="form-group col-10 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                        <input type="password" class="form-control m-2" id="Password" placeholder="Contraseña" name="Password" required>
                      </div>
                      <button type="submit" class="btn btn-primary">Registrar</button>
                  </form>
              </div>
          </div>
        </div>  
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
export default {
  name: 'RegistroEmpresasView',
  components: {
    HeaderComponent
  }
}
</script>
