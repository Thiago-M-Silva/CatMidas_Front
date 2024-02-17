import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Desenho } from '../interfaces/Desenho';
@Injectable({
  providedIn: 'root'
})
export class EnvioService {
  private apiUrl = 'http://localhost:8080/anime';

  constructor(private http: HttpClient) { }

  // formataEndereco(string: end = ' '): string{
  //   string endereco = ' ';
  //   return endereco = toString(this.apiUrl + end);
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Erro:', error.error);
    } else {
      console.error(
        `Backend retornou codigo ${error.status}, o corpo era: `, error.error);
    }
    return throwError(() => new Error('Aconteceu algo, tente novamente mais tarde.'));
  }

  getDados(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  sendDados(dados: any): Observable<any>{
    // return this.http.post<any>(this.apiUrl, dados).subscribe(
    //   resultado => {
    //     console.log('Item corrigido com sucesso!');
    //   },
    //   erro => {
    //     if(erro.status == 400){
    //       console.log(erro);
    //     }
    //   }
    // );

    return this.http.post<any>(this.apiUrl, dados).pipe(
      catchError(this.handleError)
    )
  }

  deletaDados(id: number): Observable<unknown>{
    // return this.http.delete(`${this.apiUrl}/$id`).subscribe(
    //   resultado => {
    //     console.log("Exclusao bem sucedida!");
    //   }, 
    //   erro => {
    //     if(erro.status == 404 ){
    //       console.log("Excusao mal sucedida - item não encontrado");
    //     }
    //   }
    // );

    //const url = `${this.apiUrl}/${id}`;
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError))
  }

  corrigeDados(dados: any, id: number): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${dados.id}`, dados).pipe(catchError(this.handleError))
  }
}
