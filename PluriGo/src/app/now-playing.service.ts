import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService {

  baseURL : string ;
  api_key : String ;
  lang : string ;

  constructor(private http: HttpClient) { 
    this.baseURL  = 'https://api.themoviedb.org/3';
    this.api_key = '?api_key=37cd551d86fb77d5d2b7384b4cd9f0c3&';
    this.lang = 'language=pt-BR';
    
  }

  getFilmes():Promise<any>{
    return this.http.get(this.baseURL + '/movie/now_playing' + this.api_key + this.lang + '&page=1').toPromise();

  }
  getDetalhes(id):Promise<any> {
		return this.http.get(this.baseURL + '/movie/' + id + this.api_key + this.lang).toPromise();
	}
}
