import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { hero } from './hero';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
createDb() {
    const heroes = [
{id: 1, name: 'Gragas', genre:'AP', description: 'Lanceur de tonneau Pro', image: 'gragas.jpg'},
{id: 2, name: 'Tristana', genre:'AD', description: 'Gros Canon'},
{id: 3, name: 'Zed', genre:'AD', description: 'Shuriken school'},
{id: 4, name: 'Darius', genre:'AD', description: 'dunk man'},
{id: 5, name: 'Garen', genre:'AD', description: 'Ulti debile depuis 8 saison'},
{id: 6, name: 'Fiora', genre:'AD', description: 'Pareil que garen'},
{id: 7, name: 'windwalker', genre:'DPS', description:'OP Legion'},
{id: 8, name: 'Fury', genre:'DPS', description: 'Best in the world'},
{id: 9, name: 'Arms', genre: 'DPS', description: 'Ces mieux fury'},
{id: 10, name: 'Protection', genre: 'TANK', description: 'Tank gros degat'},
{id: 11, name: 'feral', genre: 'DPS', description: 'useless'},
];

return {heroes};
}

genId(heroes: hero[]): number {
  return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) +1 : 11;
}
  constructor() { }

}

