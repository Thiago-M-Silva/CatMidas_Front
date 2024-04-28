import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Livros } from 'src/app/interfaces/Livro';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-form-livro',
  standalone: true,
  imports: [MatFormFieldModule, MatRadioModule, MatInput, FormsModule],
  templateUrl: './form-livro.component.html',
  styleUrl: './form-livro.component.css'
})
export class FormLivroComponent {
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
      this.envioService.sendDados(this.Livro).subscribe()
    }else{
      this.envioService.corrigeDados(this.Livro, this.Livro.id).subscribe()
    }
    console.log(this.Livro)
    this.fechar() 
  }
  
  fechar(){
    this.dialogRef.close()
  }
}
