import {Hero} from './hero';
import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

    getHeroes() : Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    // Simulate server latency with 2 second delay
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
}