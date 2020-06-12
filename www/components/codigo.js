// This is a JavaScript file
function per1(){
  navigator.notification.confirm('A)Brufford // B)Dio', esco1, 'Responda:', ['A)', 'B)']);

  function esco1(buttonIndex){
    if(buttonIndex == 1){
      navigator.notification.alert('acertou', null, 'A)Brufford', 'OK');
      navigator.notification.beep(1);
    }else{
      navigator.notification.alert('Errado', null, 'B)Dio', 'OK');
      navigator.vibrate(1000);
    }
  }
}

function per2(){
  navigator.notification.confirm('A)Joseph Joestar // B) Dio Brando', esco2, 'Responda:', ['A', 'B']);

  function esco2(buttonIndex){
    if(buttonIndex == 1){

      navigator.notification.alert('Errou', null, 'A)Joseph Joestar', 'OKAY');
      navigator.vibrate(1000);
    }else{
      navigator.notification.alert('Acertou', null, 'B)Dio Brando', 'OKAY');
      navigator.notification.beep(1);
    }
  }
}

function per3(){
  navigator.notification.confirm('A)Josuke Higashikata // B)Giorno Giovanna', esco3, 'Responda:', ['A', 'B']);

  function esco3(buttonIndex){
    if(buttonIndex == 1){
      navigator.notification.alert('Resposta errada!', null, 'A)Josuke Higashikata', 'OKAY');
      navigator.vibrate(1000);
    }else{
      navigator.notification.alert('Certa resposta!', null, 'B)Giorno Giovanna', 'OKAY');
      navigator.notification.beep(1);
    }
  }
}
