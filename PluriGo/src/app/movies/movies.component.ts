import { Component, OnInit } from '@angular/core';

import { NowPlayingService } from './../now-playing.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  // filmes = [
  //   {id: 1, nome: 'Jackson Silva', email:'jackson@email.com'},
  //   {id: 2, nome: 'Natalia Guedes', email:'Natalia@email.com'}
  // ];
  filme: any;
  constructor(private movieService: NowPlayingService) {

   }
   
  ngOnInit() {
    this.getFilmes();

  }
  getFilmes(){
    this.movieService.getFilmes().then(dados => this.filme = dados.results);
  }
}
