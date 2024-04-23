import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Audio } from 'src/app/interfaces/Audio';
import { EnvioService } from 'src/app/service/envio.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-form-audio',
  templateUrl: './form-audio.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatRadioModule, MatInputModule, FormsModule],
  styleUrl: './form-audio.component.css'
})
export class FormAudioComponent {
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
    public dialogRef: MatDialogRef<FormAudioComponent>
    ){}

  enviaDados(){
    this.envioService.sendDados(this.Audio).subscribe()
  }
  
  fechar(){
    this.dialogRef.close()
  }
}
