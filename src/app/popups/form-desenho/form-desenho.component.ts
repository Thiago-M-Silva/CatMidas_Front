import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Desenho } from 'src/app/interfaces/Desenho';
import { EnvioService } from 'src/app/service/envio.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-desenho',
  templateUrl: './form-desenho.component.html',
  styleUrls: ['./form-desenho.component.css']
})
export class FormDesenhoComponent {
  // esse componente foi criado em uma versão anterior do angular
  // deste modo é um dos únicos que funcionam sem o standalone
  
  id: number = 0;
  nome: string = ' ';
  autor: string  = ' ';
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
    public dialogRef: MatDialogRef<FormDesenhoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Desenho,
  ){ 
    if(data !== null)
      this.Desenho = data
  }
  

  enviaDados(){
    if(this.Desenho === null){
      this.envioService.sendDados(this.Desenho).subscribe()
    }else{
      this.envioService.corrigeDados(this.Desenho, this.Desenho.id).subscribe()
    }
    console.log(this.Desenho)
    this.fechar()    
  }
  
  fechar(){
    this.dialogRef.close()
  }
}
