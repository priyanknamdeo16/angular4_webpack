import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';


//decorator for AppComponent
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  public title : string;
  public selectedHero : Hero;
  public heroes: Hero[];

  //constructor
  constructor (private heroService: HeroService) {
    this.title = 'tour of heroes';
    //this.heroes = this.heroService.getHeroes();
  }

  getHeroes = () => {
    this.heroService.getHeroes().then((heroes) => this.heroes = heroes);
  }

  getHeroesSlowly = () => {
    this.heroService.getHeroesSlowly().then((heroes) => this.heroes = heroes);
  }

  

  ngOnInit(): void {
    //this.getHeroes();
    this.getHeroesSlowly();
  }
  
  //on select listner
  onSelect = (hero) => {
    this.selectedHero = hero;
  }
}


