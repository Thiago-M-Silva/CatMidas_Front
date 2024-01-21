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
    nome = ' ';
    autor = ' ';
    descricao = ' ';
    disponibilidade = ' ';
    tipo = ' ';
    statusVisto = ' ';
    estudio = ' ';
    duracao = 0;
    dtLancamento = 0;

    constructor( private envioService: EnvioService){
      this.getDados();
    }
    
    ngOnInit(): void {}

    Audio: Audio = {
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

    enviaDados(){}

    getDados(): void{
      this.envioService.getDados().subscribe((audio) => (this.Audio = audio))
    }
}
