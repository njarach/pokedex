import { Component, OnInit } from '@angular/core';
import { LISTEPOKEMONS } from 'src/db/listePokemons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
listDePokemons = LISTEPOKEMONS;
  constructor() { }

  ngOnInit(): void {
  }

}
