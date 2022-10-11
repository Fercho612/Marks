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
            <li><button class="dropdown-item" style="color:#fff;">Modificar</button></li>
            <li><button class="dropdown-item" style="color:#f54;" onclick='deleteMark(${idCount})'>Borrar</button></li>
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
  return {elemento, idCount,tag};
}
const tags = {
  Empresa: '#55f',
  Diseño: '#6c6',
  Desarrollo: '#f80'
};

let marcas = [];

function createMark(){
  const title = $('#CreateTitle').val();
  const url = $('#CreateUrl').val();
  const tag = $('#CreateTag').val();
  const text = $('#CreateText').val();
  const img = $('#CreateImg').val();

  marcas.push(crearMarca(mark(title,url,tag,text,img)))
  cargarMarca()

  console.log(idCount)
  console.log(marcas)
}

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
function deleteMark(id){
  $('#marca-'+id).remove();
}


function cargarMarca(){
  $("#main_sec").append(marcas[idCount-1].elemento);
  const tagsObj = Object.keys(tags);
  console.log(tagsObj);
  for (let j=0; j < tagsObj.length; j++){
    if(marcas[idCount-1].tag == tagsObj[j]){
      $('#marca-'+idCount).get(0).style.setProperty("--tag", tags[tagsObj[j]]);
    }
  }
}

marcas.push(crearMarca(mark("IPN","https://ipn.com.ar/", "Empresa","Servicio",'https://media-exp1.licdn.com/dms/image/C4D0BAQGxKfpoXXEckQ/company-logo_200_200/0/1559671842801?e=2147483647&v=beta&t=9HDBIGGeQI1mofR8Br90CCqBDf812clBY6CU6njq5RQ')));
marcas.push(crearMarca(mark("FontAwesome", "https://fontawesome.com", 'Diseño','icons')));
marcas.push(crearMarca(mark("Bootstrap", "https://getbootstrap.com/docs/5.2/getting-started/introduction/","Desarrollo", "Framework",'https://serv2.raiolanetworks.es/blog/wp-content/uploads/portada-3.jpg')));

$(document).ready(() => {
  for(let i = 0; i < marcas.length; i++){
  $("#main_sec").append(marcas[i].elemento);
  const tagsObj = Object.keys(tags);
  for (let j=0; j < tagsObj.length; j++){
    if(marcas[i].tag == tagsObj[j]){
      $('#marca-'+(i+1)).get(0).style.setProperty("--tag", tags[tagsObj[j]]);
    }
  }
  } 
});