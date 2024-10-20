import { Component } from '@angular/core';
import { Livros } from 'src/app/interfaces/Livro';
import { EnvioService } from 'src/app/service/envio.service';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormLivroComponent } from 'src/app/popups/form-livro/form-livro.component';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent {
  private origem: string = 'livro'; //identifica qual componente faz a requisicao

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

  constructor(private envioService: EnvioService,
              public dialog: MatDialog
   ){
    this.getDados();
  }

  ngOnInit(){
    this.getDados();
  }
  
  getDados(): void{
    this.envioService.getDados(this.origem).subscribe((livros) => (this.Livros = livros))
  }

  deletaDados(id: number){
    console.log(id);
    this.envioService.deletaDados(id, this.origem).subscribe();
  }
  
  editaDados(livro: Livros){
    const dialogRef = this.dialog.open(FormLivroComponent, {data: livro, height: '75vh', width: '75vh'})
  }
  
  adicionar(){
    const dialogRef = this.dialog.open(FormLivroComponent, {height: '75vh', width: '75vh'})
    dialogRef.afterClosed()
  }
}
