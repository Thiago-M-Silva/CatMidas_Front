import { Component } from '@angular/core';
import { Desenho } from 'src/app/interfaces/Desenho';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {
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

  Anime: Desenho = {
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
}
