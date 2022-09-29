const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
const validateMensj = (msj) => {
  return msj.length > 10;
}

const validateMail = () => {
  const $result = $('#validMail');
  const email = $('#email').val();
  $result.text('');

  if (validateEmail(email)) {
    $result.text('Mail valido');
    $result.css('color', '#5f5');
  } else {
    $result.text('Mail no valido');
    $result.css('color', '#f55');
  }
  return false;
}
const validateMsj = () => {
  const $result = $('#validMsj');
  const msj = $('#msj').val();
  $result.text('');
  
  if(validateMensj(msj) == false) {
    $result.text('Mensaje muy corto, digite minimo 10 caracteres');
    $result.css('color', '#f55');
  }
}

const sendMsj = () => {
  const result = document.getElementById('validSend');
  const email = $('#email').val();
  const msj = $('#msj').val();
  result = "";

  if(validateEmail(email) == false) {
    result += `Mail no valido <br>`;
    return false;
  } 
  if(validateMensj(msj) == false) { 
    result += 'Mensaje no valido';
    return false;
  }
  if(validateMensj(msj) == true & validateEmail(email) == true) {
    alert("Mensaje enviado")
    return true;
  }
}



$('#email').on('input', validateMail);
$('#msj').on('input', validateMsj);


