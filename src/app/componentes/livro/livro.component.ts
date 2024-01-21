import { Component } from '@angular/core';
import { Livros } from 'src/app/interfaces/Livro';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent {
  nome = ' ';
  autor = ' ';
  descricao = ' ';
  statusLido = ' ';
  paginas = 0;
  dtLancamento = 0;

  constructor( private envioService: EnvioService ){
    this.getDados();
  }

  ngOnInit(){}

  Livros: Livros = {
  nome: this.nome,
  autor: this.autor,
  descricao: this.descricao,
  statusLido: this.statusLido,
  paginas: this.paginas,
  dtLancamento: this.dtLancamento
  }

  enviaDados(){}

  getDados(): void{
    this.envioService.getDados().subscribe((livros) => (this.Livros = livros))
  }
}
