import { Component, OnInit } from '@angular/core';
import { NowPlayingService } from './../../now-playing.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  detalhes: any;
  id: string;
  inscricao: Subscription;

  constructor(private movieService: NowPlayingService, private rota:ActivatedRoute) {
    //this.id = this.rota.snapshot.params['id'];
   }

  ngOnInit() {
    this.inscricao = this.rota.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
    this.getDetalhes();
   
  }
  getDetalhes(){
    this.movieService.getDetalhes(this.id).then(dados => this.detalhes = dados);
    

  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
  
  }

