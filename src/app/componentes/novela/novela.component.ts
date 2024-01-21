import { Component } from '@angular/core';
import { Novela } from 'src/app/interfaces/Novela';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-novela',
  templateUrl: './novela.component.html',
  styleUrls: ['./novela.component.css']
})
export class NovelaComponent {
  nome = ' ';
  autor = ' ';
  descricao = ' ';
  disponibilidade = ' ';
  estudio = ' ';
  nacionalidade = ' ';
  status = ' ';
  statusVisto = ' ';
  maxEps = 0;
  temps = 0;

  constructor( private envioService: EnvioService ){
    this.getDados();
  }

  ngOnInit(){}

  Novela: Novela = {
    nome: this.nome,
    autor: this.autor,
    descricao: this.descricao,
    disponibilidade: this.disponibilidade,
    estudio: this.estudio,
    nacionalidade: this.nacionalidade,
    status: this.status,
    statusVisto: this.statusVisto,
    maxEps: this.maxEps,
    temps: this.temps
  }

  sendDados(){}

  getDados(){
    this.envioService.getDados().subscribe((novela) => (this.Novela = novela))
  }
}
