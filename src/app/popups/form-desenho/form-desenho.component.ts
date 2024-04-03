import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Desenho } from 'src/app/interfaces/Desenho';
import { EnvioService } from 'src/app/service/envio.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form-desenho',
  templateUrl: './form-desenho.component.html',
  styleUrls: ['./form-desenho.component.css']
})
export class FormDesenhoComponent {
  id: number = 0;
  nome: string = ' ';
  autor: string  =  ' ';
  descricao: string =' ';
  disponibilidade: string =' ';
  estudio: string =' ';
  maxEps: number = 0;
  dtLancamento: Date = new Date();
  nacionalidade: string = ' ';
  status: string =' ';
  statusVisto: string =' ';
  temps: number = 0;

  Desenho: Desenho = {
    id: this.id,
    nome: this.nome,
    autor: this.autor,
    descricao: this.descricao,
    disponibilidade: this.disponibilidade,
    estudio: this.estudio,
    maxEps: this.maxEps,
    dtLancamento: this.dtLancamento,
    nacionalidade: this.nacionalidade,
    status: this.status,
    statusVisto: this.statusVisto,
    temps: this.temps
  }

  constructor(
    private envioService: EnvioService,
    public dialogRef: MatDialogRef<FormDesenhoComponent>
    ){}

  enviaDados(){
    this.envioService.sendDados(this.Desenho).subscribe()
  }
  
  fechar(){
    this.dialogRef.close()
  }
}
