import { Component } from '@angular/core';
import { Audio } from 'src/app/interfaces/Audio';
import { EnvioService } from 'src/app/service/envio.service';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormAudioComponent } from 'src/app/popups/form-audio/form-audio.component';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent {
  private origem: string = 'audio'; //identifica qual componente faz a requisicao

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

    Audios: Audio[] = [];

    constructor(private envioService: EnvioService,
                public dialog: MatDialog,
                private Location: Location
    ){
      this.getDados();
    }
    
    ngOnInit(): void {
      this.getDados();
    }

    atualizaPag(){
      this.Location.reload();
    }

    getDados(): void{
      this.envioService.getDados(this.origem).subscribe((audio) => (this.Audio = audio))
    }

    deletaDados(id: number){
      console.log(id);
      this.envioService.deletaDados(id, this.origem).subscribe();
      // this.Location.reload()
    }
    
    editaDados(audio: Audio){
      const dialogRef = this.dialog.open(FormAudioComponent, {data: audio, height: '75vh', width: '75vw'})
    }
    
    adicionar(){
      const dialogRef = this.dialog.open(FormAudioComponent, {height: '75vh', width: '75vh'})
    }
  }
