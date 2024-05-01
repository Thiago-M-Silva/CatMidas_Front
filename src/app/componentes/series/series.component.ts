import { Component } from '@angular/core';
import { Serie } from 'src/app/interfaces/Serie';
import { EnvioService } from 'src/app/service/envio.service';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormSerieComponent } from 'src/app/popups/form-serie/form-serie.component';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  private origem: string = 'series'; //identifica qual componente faz a requisicao

  //lembrar de zerar
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

  constructor(
    private envioService: EnvioService,
    private Location: Location,
    public dialog: MatDialog
  ){
    this.getDados();
  }

  ngOnInit(): void{
    this.getDados();
  }

  getDados(){
    this.envioService.getDados(this.origem).subscribe((serie) => (this.Series = serie))
  }

  deletaDados(id: number){
	  console.log(id);
    this.envioService.deletaDados(id, this.origem).subscribe();
    // this.Location.reload()
  }

  editaDados(serie: Serie){
    const dialogRef = this.dialog.open(FormSerieComponent, {data: serie, height: '75vh', width: '75vw'})
  }
  
  adicionar(){
   const dialogRef = this.dialog.open(FormSerieComponent, {height: '75vh', width: '75vw'})
  }
}
