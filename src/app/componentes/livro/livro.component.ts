import { Component } from '@angular/core';
import { Livros } from 'src/app/interfaces/Livro';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent {
  id: number = 0;
  nome: string = ' ';
  autor: string = ' ';
  descricao: string = ' ';
  statusLido: string = ' ';
  paginas: number = 0;
  dtLancamento: Date = new Date();

  Livro: Livros = {
    id: this.id,
    nome: this.nome,
    autor: this.autor,
    descricao: this.descricao,
    statusLido: this.statusLido,
    paginas: this.paginas,
    dtLancamento: this.dtLancamento
  }

  Livros: Livros[] = [];

  constructor( private envioService: EnvioService ){
    this.getDados();
  }

  ngOnInit(){
    this.getDados();
  }

  adicionar(){
    // popup
    // this.envioService.sendDados(this.Livro).subscribe();
  }

  getDados(): void{
    this.envioService.getDados().subscribe((livros) => (this.Livros = livros))
  }

  deletaDados(id: number){
    console.log(id);
    this.envioService.deletaDados(id).subscribe();
  }

  editaDados(livro: Livros){
    this.envioService.corrigeDados(livro, this.Livro.id).subscribe()
  }
}
