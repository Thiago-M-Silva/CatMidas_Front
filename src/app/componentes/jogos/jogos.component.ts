import { Component } from '@angular/core';
import { Jogos } from 'src/app/interfaces/Jogos';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent {
  nome = ' ';
  autor = ' ';
  descricao = ' ';
  disponibilidade = ' ';
  estudio = ' ';
  status = ' ';
  statusVisto = ' ';
  dtLancamento = 0;
  duracaoMedia = 0;

  constructor( private envioService: EnvioService){
    this.getDados();
  }
  
  ngOnInit(): void {}

  Jogos: Jogos = {
    nome: this.nome,
    autor: this.autor,
    descricao: this.descricao,
    disponibilidade: this.disponibilidade,
    estudio: this.estudio,
    status: this.status,
    statusVisto: this.statusVisto,
    dtLancamento: this.dtLancamento,
    duracaoMedia: this.duracaoMedia
  }

  enviaDados(){}

  getDados(): void{
    this.envioService.getDados().subscribe((jogos) => (this.Jogos = jogos))
  }
}
