import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  template:`
  <div class="container"> 
    <header>
      <nav>
        <a routerLink="" class="root"></a> 
        <a href="https://www.google.com" target="_blank" class="google"></a>
      </nav>
    </header>
    <section>
      <router-outlet></router-outlet>
    </section>
    <footer>
      <p>Oleksandr Nazarenko</p>
      <p><a href="#">View on github</a></p>
    </footer>
  </div>
  `
})
export class AppComponent  { 
  
}
