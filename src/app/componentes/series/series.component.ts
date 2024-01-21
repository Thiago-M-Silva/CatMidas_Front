import { Component } from '@angular/core';
import { Serie } from 'src/app/interfaces/Serie';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  nome = ' ';
  autor = ' ';
  descricao = ' ';
  disponibilidade = ' ';
  estudio = ' ';
  nacionalidade = ' ';
  status = ' ';
  statusVisto = ' ';
  maxEps = 0;
  temps = 0;
  dtLancamento = ' ';
  // date = newDate(this.dtLancamento)

  constructor( private envioService: EnvioService ){

  }

  Series: Serie = {
    nome: this.nome,
    autor: this.autor,
    descricao: this.descricao,
    disponibilidade: this.disponibilidade,
    estudio: this.estudio,
    nacionalidade: this.nacionalidade,
    status: this.status,
    statusVisto: this.statusVisto,
    maxEps: this.maxEps,
    temps: this.temps,
    // dtLancamento: this.date,
  }

  sendDados(){}

  getDados(){
    this.envioService.getDados().subscribe((serie) => (this.Series = serie))
  }
}
