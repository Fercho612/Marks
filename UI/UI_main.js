function mark(title,text,tag,url,img){
  return {
  title: title,
  text: text,
  tag: tag,
  url: url,
  img:img
  };
}
let idCount = 0;

function crearMarca(mark){
  idCount++;
  const tag = mark.tag; 
  const elemento = `
    <div id="marca-${idCount}" class="sec_mark" style="background:linear-gradient(rgba(5, 7, 12, .4),rgba(5, 7, 12, .4)), center no-repeat url('${mark.img}');">
      <div class="mark_icons">
        <button class="mark_icons_fav fav-${idCount}">
          <i class="fa-sharp fa-solid fa-heart heart_icon"></i>
        </button>
        <div class="btn-group">
          <button type="button" class="mark_icons_edit" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-ellipsis"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><button class="dropdown-item" style="color:#fff;">Modificar</button></li>
            <li><button class="dropdown-item" style="color:#f54;">Borrar</button></li>
          </ul>
        </div>
      </div>
      <a href="${mark.url}" target="_blank">
        <div class="mark_content">
        <h4>${mark.title}</h4>
        <p>${mark.text}</p>
        <div class="tag_icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="${mark.tag}">
        <i class="fa-solid fa-tag"></i>
        </div>
        </div>
      </a>
    </div>
`
  return {elemento, idCount,tag};
}

let marcas = [];
const tags = {
  Empresa: '#55f',
  Diseño: '#6c6',
  Desarrollo: '#f80'
};

marcas.push(crearMarca(mark("IPN", "Servicio", "Empresa","https://ipn.com.ar/",'https://media-exp1.licdn.com/dms/image/C4D0BAQGxKfpoXXEckQ/company-logo_200_200/0/1559671842801?e=2147483647&v=beta&t=9HDBIGGeQI1mofR8Br90CCqBDf812clBY6CU6njq5RQ')));
marcas.push(crearMarca(mark("FontAwesome", "Icons","Diseño","https://fontawesome.com", 'https://ayudawp.com/wp-content/uploads/2020/01/Font-Awesome-WordPress.png')));
marcas.push(crearMarca(mark("Bootstrap", "Framework","Desarrollo", "https://getbootstrap.com/docs/5.2/getting-started/introduction/",'https://serv2.raiolanetworks.es/blog/wp-content/uploads/portada-3.jpg')));
console.log(marcas);
$(document).ready(() => {
  for(let i = 0; i < marcas.length; i++){
  $("#main_sec").append(marcas[i].elemento);
  const tagsObj = Object.keys(tags);
  for (let j=0; j < tagsObj.length; j++){
    if(marcas[i].tag == tagsObj[j]){
      $('#marca-'+(i+1)).get(0).style.setProperty("--tag", tags[tagsObj[j]]);
    }
  }
  // if(marcas[i].tag == "Empresa"){
  //   $('#tarjeta-'+(i+1)).get(0).style.setProperty("--tag", tags.Empresa);
  //  } else if (marcas[i].tag == "diseño"){
  //   $('#tarjeta-'+(i+1)).get(0).style.setProperty("--tag", "#6c6");
  //  } else if (marcas[i].tag == "desarrollo_web") {
  //   $('#tarjeta-'+(i+1)).get(0).style.setProperty("--tag", "#f80");
  //  }
  } 
});


function eliminarTarjeta(id){
  $("#" + id).remove();
  let eliminar = marcas.map((elem2, index) => {
  if(elem2.id == id){
    console.log(index);
    return index;
  }
  else return -1;
  });
  eliminar = eliminar.filter((elem1) => {
  return elem1 >= 0;
  });
  console.log(eliminar);
  marcas.splice(eliminar[0], 1);
}
