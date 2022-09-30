const validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const sendMsj = () => {  
  const mail = $('#email').val();
  const msj = $('#msj').val();
  const validSend = $('.validSend');
  $(validSend).append('');
  let send = true;
  if(!validEmail.test(mail)) {
    send = false;
    $(validSend).append('<div style="color:#f55;text-align:center">Mail no valido</div>');
  } 
  if(msj.length < 10) { 
    send = false;
    $(validSend).append('<div style="color:#f55;text-align:center">Mensaje no valido</div>');
  }
  if(send) {
    alert("Mensaje enviado")
    
  }
}