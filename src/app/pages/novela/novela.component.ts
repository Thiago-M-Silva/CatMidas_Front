import { Component } from '@angular/core';
import { Novela } from 'src/app/interfaces/Novela';
import { EnvioService } from 'src/app/service/envio.service';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormNovelaComponent } from 'src/app/popups/form-novela/form-novela.component';

@Component({
  selector: 'app-novela',
  templateUrl: './novela.component.html',
  styleUrls: ['./novela.component.css']
})
export class NovelaComponent {
  private origem: string = 'novela'; //identifica qual componente faz a requisicao

  id: number = 0;
  nome: string = ' ';
  autor: string = ' ';
  descricao: string = ' ';
  disponibilidade: string = ' ';
  estudio: string = ' ';
  nacionalidade: string = ' ';
  status: string = ' ';
  statusVisto: string = ' ';
  maxEps: number = 0;
  temps: number = 0;
  dtLancamento: Date = new Date();

  Novela: Novela = {
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
    dtLancamento: this.dtLancamento
  }

  Novelas: Novela[] = [];

  constructor(private envioService: EnvioService,
              public dialog: MatDialog
   ){
    this.getDados();
  }

  ngOnInit(){
    this.getDados();
  }
  
  getDados(){
    this.envioService.getDados(this.origem).subscribe((novela) => (this.Novelas = novela))
  }
  
  deletaDados(id: number){
    console.log(id);
    this.envioService.deletaDados(id, this.origem).subscribe();
  }
  
  editaDados(novela: Novela){
    const dialogRef = this.dialog.open(FormNovelaComponent, {data: novela, height: '75vh', width: '75vh'})
  }

  adicionar(){
    const dialogRef = this.dialog.open(FormNovelaComponent, {height: '75vh', width: '75vh'})
    dialogRef.afterClosed()
  }
}
