import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(){
  
  }

  togglePassText(){
    const passInput = document.querySelector('#password');
    if(passInput?.getAttribute('type') === 'password'){
      passInput.setAttribute('type', 'text');
    } 
    else{
      passInput?.setAttribute('type', 'password');
    }
  }
}
