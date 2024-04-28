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
  //lembrar de zerar
  id: number = 0;
  nome: string = 'a ';
  autor: string  = 'a ';
  descricao: string  = ' a';
  disponibilidade: string  = 'a ';
  estudio: string  = ' a';
  nacionalidade: string  = 'a ';
  status: string  = 'a ';
  statusVisto: string  = ' a';
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

  Series: Serie[] = [this.Serie];

  constructor(private envioService: EnvioService,
              public dialog: MatDialog){
    this.getDados();
  }

  ngOnInit(): void{
    this.getDados();
  }

  getDados(){
    this.envioService.getDados().subscribe((serie) => (this.Series = serie))
  }

  deletaDados(id: number){
	  console.log(id);
    this.envioService.deletaDados(id).subscribe();
  }

  editaDados(serie: Serie){
    const dialogRef = this.dialog.open(FormSerieComponent, {data: serie, height: '75vh', width: '75vw'})
  }
  
  adicionar(){
   const dialogRef = this.dialog.open(FormSerieComponent, {height: '75vh', width: '75vw'})
   dialogRef.afterClosed()
  }
}
