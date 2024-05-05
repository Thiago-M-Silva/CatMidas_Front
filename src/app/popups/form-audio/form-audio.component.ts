import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Audio } from 'src/app/interfaces/Audio';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-form-audio',
  templateUrl: './form-audio.component.html',
  styleUrl: './form-audio.component.css'
})
export class FormAudioComponent {
  private origem: string = 'audio'; //identifica qual componente faz a requisicao
  private Location!: Location;

  // declaracao das variaveis com valores nulos
  id: number = 0;
  nome: string = ' ';
  autor: string = ' ';
  descricao: string = ' ';
  disponibilidade: string = ' ';
  tipo: string = ' ';
  statusVisto: string = ' ';
  estudio: string = ' ';
  duracao: number = 0;
  dtLancamento: Date = new Date();

  Audio: Audio = {
    id: this.id,
    nome: this.nome,
    autor: this.autor,
    descricao: this.descricao,
    disponibilidade: this.disponibilidade,
    tipo: this.tipo,
    statusVisto: this.statusVisto,
    estudio: this.estudio,
    duracao: this.duracao,
    dtLancamento: this.dtLancamento,
  }

  constructor(
    private envioService: EnvioService,
    public dialogRef: MatDialogRef<FormAudioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Audio,
  ){
    if(data !== null)
      this.Audio = data;
  }

  enviaDados(){
    if(this.Audio === null){
      this.envioService.sendDados(this.Audio, this.origem).subscribe()
    }else{
      this.envioService.corrigeDados(this.Audio, this.Audio.id, this.origem).subscribe
    }

    console.log(this.Audio)
    this.fechar()
  }
  
  fechar(){
    this.dialogRef.close()
    this.Location.reload()
  }
}
