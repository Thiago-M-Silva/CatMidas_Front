import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  getDados(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  // terminar as funçoes
  sendDados(dados: any){
    return this.http.post<any>(this.apiUrl, dados).subscribe(
      resultado => {
        console.log('Item corrigido com sucesso!');
      },
      erro => {
        if(erro.status == 400){
          console.log(erro);
        }
      }
    );
  }

  deletaDados(){
    return this.http.delete(`${this.apiUrl}/2`).subscribe(
      resultado => {
        console.log("Exclusao bem sucedida!");
      }, 
      erro => {
        if(erro.status == 404 ){
          console.log("Excusao mal sucedida - item não encontrado");
        }
      }
    );
  }

  corrigeDados(dados: any){
    return this.http.put<any>(`${ this.apiUrl }`, dados).subscribe(
      resultado => {
        console.log('Item corrigido com sucesso!');
      },
      erro => {
        switch(erro.status){
          case 400:
            console.log(erro.error.mensagem);
            break;
          case 404:
            console.log('Edicao mal sucedida - item não encontrado');
            break;
        }
      }
    );
  }
}
