import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Filmes } from 'src/app/interfaces/Filme';
import { EnvioService } from 'src/app/service/envio.service';
@Component({
  selector: 'app-form-filme',
  templateUrl: './form-filme.component.html',
  styleUrl: './form-filme.component.css'
})
export class FormFilmeComponent {
  private origem: string = 'filme'; //identifica qual componente faz a requisicao

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
      this.envioService.sendDados(this.Filme, this.origem).subscribe()
    }else{
      this.envioService.corrigeDados(this.Filme, this.Filme.id, this.origem).subscribe()
    }
    console.log(this.Filme)
    this.fechar() 
  }
  
  fechar(){
    this.dialogRef.close()
  }
}
