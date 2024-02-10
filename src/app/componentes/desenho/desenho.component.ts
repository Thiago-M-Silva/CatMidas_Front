import { Component } from '@angular/core';
import { Desenho } from 'src/app/interfaces/Desenho';
import { EnvioService } from 'src/app/service/envio.service';
@Component({
  selector: 'app-desenho',
  templateUrl: './desenho.component.html',
  styleUrls: ['./desenho.component.css']
})
export class DesenhoComponent {
  // declaracao das variaveis com valores nulos 
  nome = ' ';
  autor =  ' ';
  descricao=' ';
  disponibilidade=' ';
  estudio=' ';
  maxEps = 0 ;
  dtLancamento = 0 ;
  nacionalidade=' ';
  status=' ';
  statusVisto=' ';
  temps = 0 ;

  constructor(private envioService: EnvioService){
    this.getDados();
  }

  ngOnInit(): void {}

  Desenho: Desenho = {
    nome: this.nome,
    autor: this.autor,
    descricao: this.descricao,
    disponibilidade: this.disponibilidade,
    estudio: this.estudio,
    maxEps: this.maxEps,
    dtLancamento: this.dtLancamento,
    nacionalidade: this.nacionalidade,
    status: this.status,
    statusVisto: this.statusVisto,
    temps: this.temps
  }

  enviaDados(){
    this.envioService.sendDados(this.Desenho);
    console.log(this.Desenho);
  }

  getDados(){
    this.envioService.getDados().subscribe((desenho) => (this.Desenho = desenho));
  }

  deletaDados(){
    this.envioService.deletaDados();
  }
}
