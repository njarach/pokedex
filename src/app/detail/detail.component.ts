import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LISTEPOKEMONS } from 'src/db/listePokemons';
import { Pokemon } from '../model/pokemon';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  listDePokemons = LISTEPOKEMONS; // on recupere la liste des pokemons
  pokemon: Pokemon = new Pokemon(); // je cree une nouvelle instance de pokemon
  constructor(private activeRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void { // l'orsque la page est charger on execute la fonction ngOnInit et le code qui est dedans

    //1- j'ai besoin de recuperer le numero qui est dans l'url
    let nombreUrl = this.activeRoute.snapshot.params['id'];

    //2- j'ai besoin de parcourir la liste des pokemons avec la boucle for
    for (let i = 0; i < this.listDePokemons.length; i++) {
      //3- j'ai besoin de comparer le numero recuperer dans l url avec l'id de chaque pokemon
      if (this.listDePokemons[i].id == nombreUrl) {
        //4- si j'ai trouve un pokemon avec l'id qui correspond au numero recuperer dans l url alor je recupere ce pokemon et je le stocke dans la variable pokemon
        this.pokemon = this.listDePokemons[i];
      }
    }
  }

  back() {
    this.route.navigate(['']); // on redirige vers la page principale
  }

  remove() {
    const index = this.listDePokemons.indexOf(this.pokemon, 0); // on recupere l'index du pokemon dans la liste
    if (index > -1) { // si l'index est superieur a -1 alors on supprime le pokemon de la liste
      this.listDePokemons.splice(index, 1); // on supprime le pokemon de la liste
    }
    this.back();
  }
}
