function mark(title,url,tag,text,img){
  return {
  title: title,
  url: url,
  tag: tag,
  text: text,
  img:img
  };
}

let idCount = 0;
function crearMarca(mark){
  idCount++;
  const tag = mark.tag; 
  const elemento = `
    <div id="marca-${idCount}" class="sec_mark" style="background:linear-gradient(rgba(5, 7, 12, .4),rgba(5, 7, 12, .4)), center no-repeat url('${mark.img}');   background-size: cover;">
      <div class="mark_icons">
        <button class="mark_icons_fav" onclick="addFav(${idCount})">
          <i id="fav-${idCount}" class="fa-sharp fa-solid fa-heart heart_icon"></i>
        </button>
        <div class="btn-group">
          <button type="button" class="mark_icons_edit" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-ellipsis"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><button class="dropdown-item text-light" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropMod" onclick="modMarkVal(${idCount})">Modificar</button></li>
            <li><button class="dropdown-item text-danger" onclick='deleteMark(${idCount})'>Borrar</button></li>
          </ul>
        </div>
      </div>
      <a href="${mark.url}" target="_blank">
        <div class="mark_content">
        <h4>${mark.title}</h4>
        <p>${mark.text}</p>
        <div class="tag_icon" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="${mark.tag}">
        <i class="fa-solid fa-tag"></i>
        </div>
        </div>
      </a>
    </div>
`
  return {elemento,idCount,tag};
}
function modElementMark(mark,cont){
  const elemento = `
  <div id="marca-${cont}" class="sec_mark" style="background:linear-gradient(rgba(5, 7, 12, .4),rgba(5, 7, 12, .4)), center no-repeat url('${mark.img}');   background-size: cover;">
    <div class="mark_icons">
      <button class="mark_icons_fav" onclick="addFav(${cont})">
        <i id="fav-${cont}" class="fa-sharp fa-solid fa-heart heart_icon"></i>
      </button>
      <div class="btn-group">
        <button type="button" class="mark_icons_edit" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-ellipsis"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><button class="dropdown-item text-light" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropMod" onclick="modMarkVal(${cont})">Modificar</button></li>
          <li><button class="dropdown-item text-danger" onclick='deleteMark(${cont})'>Borrar</button></li>
        </ul>
      </div>
    </div>
    <a href="${mark.url}" target="_blank">
      <div class="mark_content">
      <h4>${mark.title}</h4>
      <p>${mark.text}</p>
      <div class="tag_icon" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="${mark.tag}">
      <i class="fa-solid fa-tag"></i>
      </div>
      </div>
    </a>
  </div>
`
  return elemento;
}
let marcas = [];
marcas.push(crearMarca(mark("IPN","https://ipn.com.ar/", "Empresa","Servicio",'https://media-exp1.licdn.com/dms/image/C4D0BAQGxKfpoXXEckQ/company-logo_200_200/0/1559671842801?e=2147483647&v=beta&t=9HDBIGGeQI1mofR8Br90CCqBDf812clBY6CU6njq5RQ')));
marcas.push(crearMarca(mark("FontAwesome", "https://fontawesome.com", 'Diseño','icons')));
marcas.push(crearMarca(mark("Bootstrap", "https://getbootstrap.com/docs/5.2/getting-started/introduction/","Desarrollo", "Framework",'https://serv2.raiolanetworks.es/blog/wp-content/uploads/portada-3.jpg')));


const tags = {
  Empresa: '#55f',
  Diseño: '#6c6',
  Desarrollo: '#f80'
};

let auxTagCont = {};
function selectTag(){
  const tagsObj = Object.keys(tags)
  let element = "";
  for (let i in tagsObj){
    if(i != auxTagCont[tagsObj[i]]){
      auxTagCont[tagsObj[i]] = i
      element += `
      <option class='tag-${auxTagCont[tagsObj[i]]}' value="${tagsObj[i]}">${tagsObj[i]}</option>
        `   
    }
  }
  return element
}


// *Modals Function
function createMark(){
  const title = $('#CreateTitle').val();
  const url = $('#CreateUrl').val();
  const tag = $('#CreateTag').val();
  const text = $('#CreateText').val();
  const img = $('#CreateImg').val();
  console.log($('#CreateTag').val())
  if(title.length < 1) {
    $('#CreateTitle').css('border','1px solid red')
  }
  if(url.length < 1){
    $('#CreateUrl').css('border','1px solid red')
  }
  if(!title.length < 1 && !url.length < 1){
    marcas.push(crearMarca(mark(title,url,tag,text,img)))
    $('.modal-Create').modal('hide');    
    alert('Se creo la marca Correctamente')
    loadLastMark(marcas.length-1)
  }
}
function createTag(){
  const name = $('#TagName').val();
  const color = $('#TagColor').val();
  if(name.length < 1){
    $('#TagName').css('border','1px solid red')
  } else {
    tags[name] = color;
    $('.modal-tag').modal('hide');
    alert('Se creo la etiqueta Correctamente')
    loadTag()
    reloadTag()
  }
}
function modTag(){
  const tagSelect = $('#ModTag').val();
  const modColor = $('#ModTagColor').val();
  tags[tagSelect] = modColor;
  reloadTag()
}
function deleteTag(){
  const tagSelect = $('#ModTag').val();
  $('.tag-'+auxTagCont[tagSelect]).remove();
  const tagsObjAux = Object.keys(auxTagCont)  
  delete tags[tagsObjAux[auxTagCont[tagSelect]]]
  delete auxTagCont[tagsObjAux[auxTagCont[tagSelect]]]
  reloadTag()
}

// *Sec Marks
var favList = [];
function addFav(id){
  $('#fav-'+id).toggleClass('fav-active');
  if($('#fav-'+id).hasClass('fav-active')){
    favList.push(id)
  } else  {
   favList =favList.filter(function(item) {
      return item !== id
  })
  }
}
var deleteCount = 1;
function deleteMark(id){
  $('#marca-'+id).remove();
  marcas.splice(id-1,1)
  deleteCount++;
}

var modVal = 0;
function modMarkVal(val){
  modVal = val;
}
function modMark(){
  const title = $('#ModTitle').val();
  const url = $('#ModUrl').val();
  const tag = $('#ModMarkTag').val();
  const text = $('#ModText').val();
  const img = $('#ModImg').val();
  const indMar = modVal;
  if(title.length < 1) {
    $('#ModTitle').css('border','1px solid red')
  }
  if(url.length < 1){
    $('#ModUrl').css('border','1px solid red')
  }
  if(!title.length < 1 && !url.length < 1){
    marcas[indMar-1].elemento = modElementMark(mark(title, url,tag,text,img),indMar)
    marcas[indMar-1].tag = tag
    $('.modal-ModMark').modal('hide');    
    alert('Se modifico la marca Correctamente')
    reloadMark(indMar)
    reloadTag()
  }
}

// *Filtros
function filtrarMark(){
  const filAll = $('#fil_all');
  const filFav = $('#fil_fav');
  const filTag = $('#fil_tag').val();

  if(filAll.is(":checked")){
    loadAll()
  } else if (filFav.is(":checked")){
    loadFav();
  }
  if(filTag != 'allTag'){
    loadFillTags(filTag)
  } else if (filTag != 'allTag' && filFav.is(":checked")){ 
    loadFav();
    loadFillTags(filTag);
  }
}


// *Loads
function loadAllMark(){
  for(let i = 0; i < marcas.length; i++){
    $("#main_sec").append(marcas[i].elemento);
  } 
  reloadTag()
}
function loadLastMark(id){
  $("#main_sec").append(marcas[id].elemento);
  reloadTag();
}
function reloadMark(id){
  $('#marca-'+id).remove();
  $("#main_sec").append(marcas[id-1].elemento);
}

function loadTag(){
  $(".selectTag").append(selectTag())
}
function reloadTag(){
  for(let i = 0; i < marcas.length; i++){
    const tagsObj = Object.keys(tags);
    for (let j=0; j < tagsObj.length; j++){
      if(marcas[i].tag == tagsObj[j]){
        $('#marca-'+(deleteCount+i)).get(0).style.setProperty("--tag", tags[tagsObj[j]]);
        break;
      } else{
        $('#marca-'+(deleteCount+i)).get(0).style.setProperty("--tag", '#fff');
      }
    }
  }
}

function loadAll(){
  for(let i = 0; i < marcas.length; i++){
    $('#marca-'+(i+1)).css('display','flex');
  } 
}
function loadFav(){
  for(let i = 0; i < marcas.length; i++){
    if(!$('#fav-'+(i+1)).hasClass('fav-active')){
      $('#marca-'+(i+1)).css('display','none');
    } 
    else{
      $('#marca-'+(i+1)).css('display','flex');
    }
  } 
}
function loadFillTags(tagVal){
  for(let i = 0; i < marcas.length; i++){
    if(marcas[i].tag != tagVal){
      $('#marca-'+(i+1)).css('display','none');
    } 
  }
}


$(document).ready(() => {
  loadAllMark()
  loadTag();
});