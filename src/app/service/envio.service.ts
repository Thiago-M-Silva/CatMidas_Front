import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnvioService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Erro:', error.error);
    } else {
      console.error(
        `Backend retornou codigo ${error.status}, o corpo era: `, error.error);
    }
    return throwError(() => new Error('Aconteceu algo, tente novamente mais tarde.'));
  }
  
  getAllDados(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  getDados(origem: string): Observable<any>{
    return this.http.get<any>(this.apiUrl + {origem});
  }

  sendDados(dados: any, origem: string): Observable<any>{
    return this.http.post<any>(this.apiUrl + {origem}, dados).pipe(
      catchError(this.handleError)
    )
  }

  deletaDados(id: number, origem: string): Observable<unknown>{
    return this.http.delete(`${this.apiUrl + origem}/${id}`).pipe(catchError(this.handleError))
  }

  corrigeDados(dados: any, id: number, origem: string): Observable<any>{
    return this.http.put<any>(`${this.apiUrl + origem}/${dados.id}`, dados).pipe(catchError(this.handleError))
  }
}
