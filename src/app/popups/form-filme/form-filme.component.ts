import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EnvioService } from 'src/app/service/envio.service';
import { Filmes } from 'src/app/interfaces/Filme';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-filme',
  standalone: true,
  imports: [MatFormFieldModule, MatRadioModule, MatInput, FormsModule],
  templateUrl: './form-filme.component.html',
  styleUrl: './form-filme.component.css'
})
export class FormFilmeComponent {
// declaracao das variaveis com valores nulos
  id: number = 0;
  nome: string = ' ';
  diretor: string = ' ';
  descricao: string = ' ';
  disponibilidade: string = ' ';
  estudio: string = ' ';
  status: string = ' ';
  statusVisto: string = ' ';  
  duracao: number = 0;
  dtLancamento: Date = new Date();

  Filme: Filmes = {
    id: this.id,
    nome: this.nome,
    diretor: this.diretor,
    descricao: this.descricao,
    disponibilidade: this.disponibilidade,
    status: this.status,
    statusVisto: this.statusVisto,  
    estudio: this.estudio,
    duracao: this.duracao,
    dtLancamento: this.dtLancamento
  }

  constructor(
    private envioService: EnvioService,
    public dialogRef: MatDialogRef<FormFilmeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Filmes
  ){
    if(data !== null)
      this.Filme = data
  }

  enviaDados(){
    if(this.Filme === null){
      this.envioService.sendDados(this.Filme).subscribe()
    }else{
      this.envioService.corrigeDados(this.Filme, this.Filme.id).subscribe()
    }
    console.log(this.Filme)
    this.fechar() 
  }
  
  fechar(){
    this.dialogRef.close()
  }
}
