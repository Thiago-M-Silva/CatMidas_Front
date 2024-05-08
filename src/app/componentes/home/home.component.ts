import { Component } from '@angular/core';
import { Audio } from 'src/app/interfaces/Audio';
import { Desenho } from 'src/app/interfaces/Desenho';
import { Filmes } from 'src/app/interfaces/Filme';
import { Jogos } from 'src/app/interfaces/Jogos';
import { Livros } from 'src/app/interfaces/Livro';
import { Novela } from 'src/app/interfaces/Novela';
import { Quadrinhos } from 'src/app/interfaces/Quadrinhos';
import { Serie } from 'src/app/interfaces/Serie';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  id: number = 0;
  nome: string = ' ';
  autor: string = ' ';
  descricao: string = ' ';
  disponibilidade: string = ' ';
  tipo: string = ' ';
  statusVisto: string = ' ';
  estudio: string = ' ';
  duracao: number = 0;
  dtLancamento: Date = new Date();

  Audio: Audio = {
    id: this.id,
    nome: this.nome,
    autor: this.autor,
    descricao: this.descricao,
    disponibilidade: this.disponibilidade,
    tipo: this.tipo,
    statusVisto: this.statusVisto,
    estudio: this.estudio,
    duracao: this.duracao,
    dtLancamento: this.dtLancamento,
  }

  constructor(
    private envioService: EnvioService
  ){
    this.getAll();
  }

  desenhos: Desenho[] = []
  Audios: Audio[] = [];
  filmes!: Filmes[]
  jogos!: Jogos[]
  livros!: Livros[]
  novelas!: Novela[]
  quadrinhos!: Quadrinhos[]
  series!: Serie[]

  getAll(){
    this.envioService.getDados('anime').subscribe((desenhos) => this.desenhos = desenhos)
    this.envioService.getDados('audio').subscribe((audios) => this.Audios = audios)
    this.envioService.getDados('filme').subscribe((filmes) => this.filmes = filmes)
    this.envioService.getDados('jogo').subscribe((jogos) => this.jogos = jogos)
    this.envioService.getDados('livro').subscribe((livros) => this.livros = livros)
    this.envioService.getDados('novela').subscribe((novelas) => this.novelas = novelas)
    this.envioService.getDados('manga').subscribe((quadrinhos) => this.quadrinhos = quadrinhos)
    this.envioService.getDados('serie').subscribe((series) => this.series = series)
  }
}
