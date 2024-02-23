import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RetornoAPI } from '../../models/retornoAPI';
import { Observable } from 'rxjs';
import { Filme } from '../../models/filme';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API = 'https://swapi.dev/api/films';

  constructor(private http : HttpClient) { }

  listarFilmes() : Observable<RetornoAPI<Filme>> {
    return this.http.get<RetornoAPI<Filme>>(this.API)
  } 
}
