import { Component } from '@angular/core';

@Component({
  selector: 'app-hamburgermenu',
  templateUrl: './hamburgermenu.component.html',
  styleUrls: ['./hamburgermenu.component.scss']
})
export class HamburgermenuComponent {
  constructor(){}

  displayMenu(){
    console.log('mouse over');
    const hamburgerIcon : HTMLElement|null = document.querySelector('.hamburger-icon img');
    const hamburgmenu: HTMLElement|null = document.querySelector('.hamburger-menu');
    if(hamburgerIcon && hamburgmenu){
      hamburgmenu.style.transform = 'scaleY(1)';
      hamburgerIcon.style.filter = 'brightness(0) invert(1)'
    }
  }

  hideMenu(){
    const hamburgerIcon : HTMLElement|null = document.querySelector('.hamburger-icon img');
    const hamburgmenu: HTMLElement|null = document.querySelector('.hamburger-menu');
    if(hamburgerIcon && hamburgmenu){
      hamburgmenu.style.transform = 'scaleY(0)';
      hamburgerIcon.style.filter = 'brightness(1) invert(0)'
    }
  }
}
