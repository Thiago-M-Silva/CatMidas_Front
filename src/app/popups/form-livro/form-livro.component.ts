import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Livros } from 'src/app/interfaces/Livro';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-form-livro',
  standalone: true,
  imports: [MatFormFieldModule, MatCheckbox, MatInput, FormsModule],
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
    public dialogRef: MatDialogRef<FormLivroComponent>
  ){}

  enviaDados(){
    this.envioService.sendDados(this.Livro).subscribe()
  }
  
  fechar(){
    this.dialogRef.close()
  }
}
