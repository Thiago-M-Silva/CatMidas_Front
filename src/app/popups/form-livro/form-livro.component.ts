import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Livros } from 'src/app/interfaces/Livro';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrl: './form-livro.component.css'
})
export class FormLivroComponent {
  private origem: string = 'livro'; //identifica qual componente faz a requisicao
  private Location!: Location;

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

  constructor(
    private envioService: EnvioService,
    public dialogRef: MatDialogRef<FormLivroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Livros,
  ){}

  enviaDados(){
    if(this.Livro === null){
      this.envioService.sendDados(this.Livro, this.origem).subscribe()
    }else{
      this.envioService.corrigeDados(this.Livro, this.Livro.id, this.origem).subscribe()
    }
    console.log(this.Livro)
    this.fechar() 
  }
  
  fechar(){
    this.dialogRef.close()
    this.Location.reload()
  }
}
