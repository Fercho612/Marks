const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const tabs = document.querySelectorAll(".btn_log"), forms = document.querySelectorAll(".form");

tabs.forEach((tab, index) => {
  tab.addEventListener('click',() => {
    forms.forEach((content) => {
      content.classList.remove('form-active');
    });
    tabs.forEach((tab) => {
      tab.classList.remove('btn-active');
    });

    forms[index].classList.add('form-active');
    tabs[index].classList.add('btn-active');
  });
});

const signIn = () => {
  const user = $('#sign_user').val();
  const mail = $('#sign_email').val();
  const password = $('#sign_pass').val();
  const confirmPassword = $('#sign_confirPass').val();
  const check = $('#accept');
  let sendSingIn = true;

  if(user.length < 5){
    $(".group_user").get(0).style.setProperty("--inPasscolor", "#f55");
    $(".helpIconUser").css("display","block");
    $(".checkIconUser").css("display","none");
    $(".helpIconUser").attr({
      "colors": 'primary:#f55'
    });
    sendSingIn = false;
  } else {
    $(".group_user").get(0).style.setProperty("--input-color", "#1a1");
    $(".helpIconUser").css("display","none");
    $(".checkIconUser").css("display","block");
    $("#tooltipUser").attr({
      "data-bs-title": 'Usuario valido :D'
    });
  }
  if(!validEmail.test(mail)){
    $(".group_email").get(0).style.setProperty("--input-color", "#f55");
    $(".helpIconMail").css("display","block");
    $(".checkIconMail").css("display","none");
    $(".helpIconMail").attr({
      "colors": 'primary:#f55'
    });
    sendSingIn = false;
  } else {
    $(".group_email").get(0).style.setProperty("--input-color", "#1a1");
    $(".helpIconMail").css("display","none");
    $(".checkIconMail").css("display","block");
    $("#tooltipHelp").attr({
      "data-bs-title": 'Mail Valido :D'
    });
  }
  if(password.length < 8){
    $(".group_pass").get(0).style.setProperty("--input-color", "#f55");
    $(".helpIconPass").css("display","block");
    $(".checkIconPass").css("display","none");
    $(".helpIconPass").attr({
      "colors": 'primary:#f55'
    });
    sendSingIn = false;
  } else {
    $(".group_pass").get(0).style.setProperty("--input-color", "#1a1");
    $(".helpIconPass").css("display","none");
    $(".checkIconPass").css("display","block");
    $("#tooltipPass").attr({
      "data-bs-title": 'Contraseña Valida :D'
    });
  }
  if(password != confirmPassword){
    $(".group_pass2").get(0).style.setProperty("--input-color", "#f55");
    $(".helpIconPass2").css("display","block");
    $(".checkIconPass2").css("display","none");
    $(".helpIconPass2").attr({
      "colors": 'primary:#f55'
    });
    sendSingIn = false;
  } else {
    $(".group_pass2").get(0).style.setProperty("--input-color", "#1a1");
    $(".helpIconPass2").css("display","none");
    $(".checkIconPass2").css("display","block");
    $("#tooltipPass2").attr({
      "data-bs-title": 'Contraseña Valida :D'
    });
  }
  if(!check.prop("checked")){
    sendSingIn = false;
  }
  if(sendSingIn){
    alert("Registro Completado");
    window.location.href = "../UI/UI.html";
  }
}; 

const logIn = () => {
  alert("Se inicio sesion correctamente");
  window.location.href = "../UI/UI.html";
};