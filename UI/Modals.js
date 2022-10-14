const modalCreate = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title fs-5" id="staticBackdropLabel">Crear Marca</h3>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form class="container-fluid">
        <span class="h4">Requerido</span>
        <div class="row m-3 modal_group_inputs align-items-center">
          <label for="CreateTitle" class="col-3 m-0 h3">Titulo:</label> 
          <input id="CreateTitle" type="text" class="form-control modal_inputs col-9">
        </div>
        <div class="row m-3 modal_group_inputs align-items-center">
          <label for="CreateUrl" class="col-3 m-0 h3">Url:</label> 
          <input id="CreateUrl" type="text" class="form-control modal_inputs col-9">
        </div>
        <hr>
        <span class="h4">Opcional</span>
        <div class="row m-3 modal_group_inputs align-items-center">
          <label for="CreateTag" class="col-4 m-0 h5">Etiqueta:</label> 
          <select id="CreateTag" class="form-select modal_inputs col-8 selectTag" aria-label="Default select example">
            <option selected>Seleccionar etiqueta</option>
          </select>
        </div>
        <div class="row m-3 modal_group_inputs align-items-center">
          <label for="CreateImg" class="col-4 m-0 h5">Imagen(URL):</label> 
          <input id="CreateImg" type="text" class="form-control modal_inputs col-7">
        </div>
        <div class="row m-3 modal_group_inputs align-items-start">
          <label for="CreateText" class="col-4 m-0 h5">Descripcion:</label> 
          <textarea id="CreateText"
          class="modal_inputs modal_inputs_descp col-8" cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
      <button type="button" class="btn btn-primary" onclick="createMark()">Guardar</button>
    </div>
  </div>
</div>
`
$('.modal-Create').append(modalCreate)

const modalTag = `
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
    <h3 class="modal-title fs-5" id="staticBackdropLabel">Crear Etiqueta</h3>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <form class="container-fluid">
      <div class="row m-3 modal_group_inputs align-items-center">
        <label for="TagName" class="col-4 m-0 h3">Nombre:</label> 
        <input id="TagName" type="text" class="form-control modal_inputs col-7">
      </div>
      <div class="row m-3 modal_group_inputs align-items-center">
        <label for="TagColor" class="col-4 m-0 h3">Color: </label> 
        <input id="TagColor"  type="color" class="form-control form-control-color modal_inputs col-7" value="#563d7c" title="Choose your color">
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
    <button type="button" class="btn btn-primary" onclick="createTag()">Guardar</button>
  </div>
</div>
</div>
`
$('.modal-tag').append(modalTag)

const modalModTag = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title fs-5" id="staticBackdropLabel3">Modoficar etiqueta</h3>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form class="container-fluid">
        <div class="row m-3 modal_group_inputs align-items-center">
          <label for="ModTag" class="col-6 m-0 h3">Etiqueta:</label> 
          <select id="ModTag" class="form-select modal_inputs col-8 selectTag" aria-label="Default select example">
            <option selected>Seleccionar etiqueta</option>
          </select>
        </div>
        <div class="row m-3 modal_group_inputs align-items-center">
          <label for="ModTagColor" class="col-6 m-0 h3">Color: </label> 
          <input id="ModTagColor"  type="color" class="form-control form-control-color modal_inputs col-6" value="#563d7c" title="Choose your color">
        </div>
        <div class="row justify-content-center">
          <button type="button" class="btn btn-danger btn-log col-3" onclick="deleteTag()">Eliminar</button>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
      <button type="button" class="btn btn-primary" onclick="modTag()" data-bs-dismiss="modal">Guardar</button>
    </div>
  </div>
</div>
`
$('.modal-modtag').append(modalModTag)

const modalModMark = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title fs-5" id="staticBackdropLabel">Crear Marca</h3>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form class="container-fluid">
        <span class="h4">Requerido</span>
        <div class="row m-3 modal_group_inputs align-items-center">
          <label for="ModTitle" class="col-3 m-0 h3">Titulo:</label> 
          <input id="ModTitle" type="text" class="form-control modal_inputs col-9">
        </div>
        <div class="row m-3 modal_group_inputs align-items-center">
          <label for="ModUrl" class="col-3 m-0 h3">Url:</label> 
          <input id="ModUrl" type="text" class="form-control modal_inputs col-9">
        </div>
        <div class="row m-3 modal_group_inputs align-items-center">
          <label for="ModMarkTag" class="col-4 m-0 h3">Etiqueta:</label> 
          <select id="ModMarkTag" class="form-select modal_inputs col-8 selectTag" aria-label="Default select example">
            <option selected>Seleccionar etiqueta</option>
          </select>
        </div>
        <div class="row m-3 modal_group_inputs align-items-center d-flex justify-content-between">
          <label for="ModImg" class="col-4 m-0 h3">Imagen(URL):</label> 
          <input id="ModImg" type="text" class="form-control modal_inputs col-7">
        </div>
        <div class="row m-3 modal_group_inputs align-items-start d-flex justify-content-between">
          <label for="ModText" class="col-4 m-0 h3">Descripcion:</label> 
          <textarea id="ModText"
          class="modal_inputs modal_inputs_descp col-8" cols="30" rows="10""></textarea>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
      <button type="button" class="btn btn-primary" onclick="modMark()">Guardar</button>
    </div>
  </div>
</div>
`
$('.modal-ModMark').append(modalModMark)