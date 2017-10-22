import { Component } from '@angular/core';

//hero class defined
export class Hero {
  public id:number;
  public name:string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Neha' },
  { id: 12, name: 'Iti' },
  { id: 13, name: 'Priyank' }
];

//decorator for AppComponent
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : string;
  public selectedHero : Hero;
  public heroes: Hero[];

  //constructor
  constructor () {
    this.title = 'tour of heroes';
    //this.hero  = HEROES[0];
    this.heroes = HEROES;
  }

  //on select listner
  onSelect = (hero) => {
    this.selectedHero = hero;
  }
}


