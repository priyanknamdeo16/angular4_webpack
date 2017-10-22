import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';
import { Router }   from '@angular/router';


//decorator for AppComponent
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  public title : string;
  public selectedHero : Hero;
  public heroes: Hero[];

  //constructor
  constructor (private heroService: HeroService, private router: Router) {
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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}


