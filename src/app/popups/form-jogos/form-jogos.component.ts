import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Jogos } from 'src/app/interfaces/Jogos';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-form-jogos',
  templateUrl: './form-jogos.component.html',
  styleUrl: './form-jogos.component.css'
})
export class FormJogosComponent {
  private origem: string = 'jogos'; //identifica qual componente faz a requisicao
  private Location!: Location;

  id: number = 0;
  nome: string = ' ';
  autor: string  = ' ';
  descricao: string  = ' ';
  disponibilidade: string  = ' ';
  estudio: string  = ' ';
  status: string  = ' ';
  statusVisto: string  = ' ';
  dtLancamento: Date = new Date();
  duracaoMedia: number = 0;
  
  Jogo: Jogos = {
    id: this.id,
    nome: this.nome,
    autor: this.autor,
    descricao: this.descricao,
    disponibilidade: this.disponibilidade,
    estudio: this.estudio,
    status: this.status,
    statusVisto: this.statusVisto,
    dtLancamento: this.dtLancamento,
    duracaoMedia: this.duracaoMedia
  }
  
  constructor(
    private envioService: EnvioService,
    public dialogRef: MatDialogRef<FormJogosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Jogos
  ){
    if(data !== null)
        this.Jogo = data
  }

  enviaDados(){
    if(this.Jogo === null){
      this.envioService.sendDados(this.Jogo, this.origem).subscribe()
    }else{
      this.envioService.corrigeDados(this.Jogo, this.Jogo.id, this.origem).subscribe()
    }
    console.log(this.Jogo)
    this.fechar() 
  }
  
  fechar(){
    this.dialogRef.close()
    this.Location.reload()
  }
}
