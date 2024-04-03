import { Component } from '@angular/core';
import { Serie } from 'src/app/interfaces/Serie';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  id: number = 0;
  nome: string = ' ';
  autor: string  = ' ';
  descricao: string  = ' ';
  disponibilidade: string  = ' ';
  estudio: string  = ' ';
  nacionalidade: string  = ' ';
  status: string  = ' ';
  statusVisto: string  = ' ';
  maxEps: number  = 0;
  temps: number  = 0;
  dtLancamento: Date = new Date();
  
  Serie: Serie = {
    id: this.id,
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
    dtLancamento: this.dtLancamento,
  }

  Series: Serie[] = [];

  constructor( private envioService: EnvioService ){
    this.getDados();
  }

  ngOnInit(): void{
    this.getDados();
  }

  adicionar(){
    // popup
    // this.envioService.sendDados(this.Serie).subscribe();
    // fazer uma funcao para a atualizar a pagina, ao final do envio .subscribe(Serie => this.Serie.funcao )
    // console.log(this.Serie);
  }

  getDados(){
    this.envioService.getDados().subscribe((serie) => (this.Series = serie))
  }

  deletaDados(id: number){
	  console.log(id);
    this.envioService.deletaDados(id).subscribe();
  }

  editaDados(serie: Serie){
    console.log(serie);
    console.log(this.Serie);
    this.envioService.corrigeDados(serie, this.Serie.id).subscribe();
  }
}
