import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Desenho } from '../interfaces/Desenho';
@Injectable({
  providedIn: 'root'
})
export class EnvioService {
  private apiUrl = 'http://localhost:8080/Anime';

  constructor(private http: HttpClient) { }

  getDados(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  // terminar as funçoes
  sendDados(dados: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, dados)
  }

  deletaDados(){}

  corrigeDados(){}
}
