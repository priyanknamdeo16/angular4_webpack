import { Component } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HeroesComponent }   from './heroes.component';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
      
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'My Family from App Component';
}