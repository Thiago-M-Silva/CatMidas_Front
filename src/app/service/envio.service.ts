import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Desenho } from '../interfaces/Desenho';
@Injectable({
  providedIn: 'root'
})
export class EnvioService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getDados(): Observable<Desenho>{
    return this.http.get<Desenho>(this.apiUrl);
  }

  // terminar as funçoes
  enviaDados(dados: any){
    this.http.post(dados, this.apiUrl)
  }

  deletaDados(){}

  corrigeDados(){}
}
