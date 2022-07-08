import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LISTEPOKEMONS } from 'src/db/listePokemons';
import { Pokemon } from '../model/pokemon';
import { LoadService } from '../service/load.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  listDePokemons = LISTEPOKEMONS;
  pokemon: Pokemon = new Pokemon(); 
  constructor(private activeRoute: ActivatedRoute, private route: Router,private loadService:LoadService) { }

  ngOnInit(): void { 
    
    let nombreUrl = this.activeRoute.snapshot.params['id'];
    this.pokemon = this.loadService.getPokemonById(nombreUrl);
  }

  back() {
    this.route.navigate(['']);
  }

  validate(){
    this.route.navigate(['/detail', this.pokemon.id]);
  }

}
