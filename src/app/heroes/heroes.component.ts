import { Component, OnInit } from '@angular/core';
import { hero } from '../hero';
import { HeroService } from '../hero.service';
import { catchError } from 'rxjs/operators';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})



export class HeroesComponent implements OnInit {
      heroes = [];


  constructor(private heroService: HeroService) { }

  ngOnInit() {
  this.getHeroes();
  }



  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

  }

  add(name:string) : void {
      name=name.trim();
      if (!name) {return;}
      this.heroService.addhero({name}as hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });

  }
  delete(hero: hero): void {
    this.heroes = this.heroes.filter(h => h !==hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
