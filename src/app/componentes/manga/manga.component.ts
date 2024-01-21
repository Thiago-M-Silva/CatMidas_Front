import { Component } from '@angular/core';
import { Manga } from 'src/app/interfaces/Manga';
import { EnvioService } from 'src/app/service/envio.service';
@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent {
  nome = ' ';
  autor = ' ';
  descricao = ' ';
  disponibilidade = ' ';
  nacionalidade = ' ';
  status = ' ';
  statusVisto = ' ';
  caps = 0;
  dtLancamento = 0;

  constructor(private envioService: EnvioService ){
    this.getDados();
  }

  ngOnInit(){}

  Manga: Manga = {
    nome: this.nome,
    autor: this.autor,
    descricao: this.descricao,
    disponibilidade: this.disponibilidade,
    nacionalidade: this.nacionalidade,
    status: this.status,
    statusVisto: this.statusVisto,
    caps: this.caps,
    dtLancamento: this.dtLancamento
  }

  enviaDados(){}

  getDados(): void{
    this.envioService.getDados().subscribe((manga) => (this.Manga = manga))
  }
}
