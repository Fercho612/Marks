const tabs = document.querySelectorAll(".btn"), forms = document.querySelectorAll(".form");

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

function matchPass(p1,p2){
  return p1 === p2;
}

const validPass = () => {
  const pass1 = $('#sign_password').val();
  const pass2 = $('#sign_confirPass').val();
  const $validPass = $('#validatePass');
  $validPass.text('');

  if(matchPass(pass1,pass2)){
    $validPass.text('Coinciden las contrasenas');
    $validPass.css('color', '#191');
  }else {
    $validPass.text('No coinciden las contrasenas');
    $validPass.css('color', '#f55');
  }
}

const validateSign = () => {
  const $result = $('#form_mail_valid');
  $result.text('');
  const email = $('#email_form').val();

  if (validateEmail(email)) {
    $result.text('Mail valido');
    $result.css('color', '#191');
  } else {
    $result.text('Mail no valido');
    $result.css('color', '#f55');
  }
 
  return false;
}


$('#email_form').on('input', validateSign);
$('#sign_confirPass').on('input',validPass)