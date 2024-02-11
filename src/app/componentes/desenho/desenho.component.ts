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
  id: number = 0;
  nome: string = ' ';
  autor: string  =  ' ';
  descricao: string =' ';
  disponibilidade: string =' ';
  estudio: string =' ';
  maxEps: number = 0 ;
  dtLancamento: Date = new Date();
  nacionalidade: string = ' ';
  status: string =' ';
  statusVisto: string =' ';
  temps = 0;

  constructor(private envioService: EnvioService){
    this.getDados();
  }

  ngOnInit(): void {
    this.getDados();
  }

  
  // Desenhos[]: Desenho = {
  //   id: this.id,
  //   nome: this.nome,
  //   autor: this.autor,
  //   descricao: this.descricao,
  //   disponibilidade: this.disponibilidade,
  //   estudio: this.estudio,
  //   maxEps: this.maxEps,
  //   dtLancamento: this.dtLancamento,
  //   nacionalidade: this.nacionalidade,
  //   status: this.status,
  //   statusVisto: this.statusVisto,
  //   temps: this.temps
  // };

  Desenho: Desenho = {
    id: this.id,
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

  deletaDados(id: number){
    this.envioService.deletaDados(id);
  }

  editaDados(id: number){
    this.envioService.corrigeDados(this.Desenho, id);
  }
}
