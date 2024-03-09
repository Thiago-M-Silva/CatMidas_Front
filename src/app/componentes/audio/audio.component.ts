import { Component } from '@angular/core';
import { Audio } from 'src/app/interfaces/Audio';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent {
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


    constructor( private envioService: EnvioService){
      this.getDados();
    }
    
    ngOnInit(): void {
      this.getDados();
    }

    enviaDados(){
      this.envioService.sendDados(this.Audio).subscribe();
      //fazer uma funcao para a atualizar a pagina, ao final do envio .subscribe(Audio => this.Audio.funcao )
      console.log(this.Audio);
    }

    getDados(): void{
      this.envioService.getDados().subscribe((audio) => (this.Audio = audio))
    }

    deletaDados(id: number){
      console.log(id);
      this.envioService.deletaDados(id).subscribe();
    }
  
    editaDados(audio: Audio){
      console.log(audio);
      console.log(this.Audio);
      this.envioService.corrigeDados(audio, this.Audio.id).subscribe();
    }
}
