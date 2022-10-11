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
  const check = $('#accept');

  if (!checkInputUser()){
    $(".group_user").get(0).style.setProperty("--input-color", "#f55");
    $(".helpIconUser").css("display","block");
    $(".checkIconUser").css("display","none");
    $(".helpIconUser").attr({
      "colors": 'primary:#f55'
    });
  }
  if (!checkInputMail()){
    $(".group_email").get(0).style.setProperty("--input-color", "#f55");
    $(".helpIconMail").css("display","block");
    $(".checkIconMail").css("display","none");
    $(".helpIconMail").attr({
      "colors": 'primary:#f55'
    });
  }
  if(!checkInputPass()){
    $(".group_pass").get(0).style.setProperty("--input-color", "#f55");
    $(".helpIconPass").css("display","block");
    $(".checkIconPass").css("display","none");
    $(".helpIconPass").attr({
      "colors": 'primary:#f55'
    });
  }
  if(!checkInputPassConfirm()){
    $(".group_pass2").get(0).style.setProperty("--input-color", "#f55");
    $(".helpIconPass2").css("display","block");
    $(".checkIconPass2").css("display","none");
    $(".helpIconPass2").attr({
      "colors": 'primary:#f55'
    });
  }
  if(!check.prop("checked")){
    $(".checkInput").css("display", "block");
  } 

  if(checkInputUser() && checkInputMail() && checkInputPass() && checkInputPassConfirm() && check.prop("checked")){
    alert("Registro Completado");
    window.location.href = "../UI/UI.html";
  }
}; 

function checkInputUser(){
  const user = $('#sign_user').val();
  if(user.length > 4){
    $(".group_user").get(0).style.setProperty("--input-color", "#1a1");
    $(".helpIconUser").css("display","none");
    $(".checkIconUser").css("display","block");
    $("#tooltipUser").attr({
      "data-bs-title": 'Usuario valido :D'
    });
    return true;
  } else {
    $(".group_user").get(0).style.setProperty("--input-color", "#7B2CBF");
    $(".helpIconUser").css("display","block");
    $(".checkIconUser").css("display","none");
    $(".helpIconUser").attr({
      "colors": 'primary:#7B2CBF'
    });
    return false;
  }
}
function checkInputMail(){
  const mail = $('#sign_email').val();
  if(!validEmail.test(mail)){
    $(".group_email").get(0).style.setProperty("--input-color", "#7B2CBF");
    $(".helpIconMail").css("display","block");
    $(".checkIconMail").css("display","none");
    $(".helpIconMail").attr({
      "colors": 'primary:#7B2CBF'
    });
    return false;
  } else {
    $(".group_email").get(0).style.setProperty("--input-color", "#1a1");
    $(".helpIconMail").css("display","none");
    $(".checkIconMail").css("display","block");
    $("#tooltipHelp").attr({
      "data-bs-title": 'Mail Valido :D'
    });
    return true;
  }
}
function checkInputPass(){
  const password = $('#sign_pass').val();
  if(password.length < 7){
    $(".group_pass").get(0).style.setProperty("--input-color", "#7B2CBF");
    $(".helpIconPass").css("display","block");
    $(".checkIconPass").css("display","none");
    $(".helpIconPass").attr({
      "colors": 'primary:#7B2CBF'
    });
    return false;
  } else {
    $(".group_pass").get(0).style.setProperty("--input-color", "#1a1");
    $(".helpIconPass").css("display","none");
    $(".checkIconPass").css("display","block");
    $("#tooltipPass").attr({
      "data-bs-title": 'Contraseña Valida :D'
    });
    return true;
  }
}
function checkInputPassConfirm(){ 
  let password2 = $('#sign_pass').val();
  const confirmPassword = $('#sign_confirPass').val();
  if(confirmPassword == password2){
    $(".group_pass2").get(0).style.setProperty("--input-color", "#1a1");
    $(".helpIconPass2").css("display","none");
    $(".checkIconPass2").css("display","block");
    $(".helpIconPass2").attr({
      "colors": 'primary:#f55'
    });
    return true;
  } else {
    $(".group_pass2").get(0).style.setProperty("--input-color", "#f55");
    $(".helpIconPass2").css("display","block");
    $(".checkIconPass2").css("display","none");
    $("#tooltipPass2").attr({
      "data-bs-title": 'Contraseña Valida :D'
    });
    return false;
  }
}
function checkInputCheck() {
  const check2 = $('#accept');
  if(check2.prop("checked")){
    $(".checkInput").removeAttr("style");
  }
  console.log("Check");
  return true;
}

const logIn = () => {
  const logUser = $('#log_user').val();
  const logPass = $('#log_pass').val();
  if(logUser.length < 1){
    $('.user_label').css('color','#f55');
  }
  if(logPass.length < 1){
    $('.pass_label').css('color','#f55');
  }
  if(logUser.length > 0 && logPass.length > 0){
  alert("Se inicio sesion correctamente");
  window.location.href = "../UI/UI.html";
  }
};

function checkUserLog(){
  const logUserCheck = $('#log_user').val();
  if(logUserCheck.length > 0){
    $('.group_user_log').get(0).style.setProperty("--input-color", "#1a1");
    $('.user_label').css('color','#1a1');
  }
}
function checkPassLog(){
  const logPassCheck = $('#log_pass').val();
  if(logPassCheck.length > 0){
    $('.group_user_pass').get(0).style.setProperty("--input-color", "#1a1");
    $('.pass_label').css('color','#1a1');
  }
}