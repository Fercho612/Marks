const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const sendMsj = () => {  
  const mail = $('#email').val();
  const msj = $('#msj').val();
  const validMail = $(".valid_Mail");
  const validMsj = $(".valid_txt");

  let send = true;
  if(!validEmail.test(mail)) {
    send = false;
    $(validMail).css('color', '#f55');
    $(".valid_input_mail").css('outline', '1px solid red');
  } else{
    $(validMail).removeAttr('style');
  }
  if(msj.length < 10) { 
    send = false;
    $(validMsj).css('color', '#f55');
    $(".valid_input_txt").css('outline', '1px solid red');
  } else{
    $(validMsj).removeAttr('style');
  }
  if(send) {
    alert("Mensaje enviado")
    location.reload();
  }
}