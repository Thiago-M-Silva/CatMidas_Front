import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Desenho } from 'src/app/interfaces/Desenho';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-form-desenho',
  templateUrl: './form-desenho.component.html',
  styleUrls: ['./form-desenho.component.css']
})
export class FormDesenhoComponent {  
  // no backend esse componente está mapeado como "Anime"
  
  private origem: string = 'anime'; //identifica qual componente faz a requisicao
  private location!: Location;
  
  id: number = 0;
  nome: string = ' ';
  autor: string  = ' ';
  descricao: string =' ';
  disponibilidade: string =' ';
  estudio: string =' ';
  maxEps: number = 0;
  dtLancamento: Date = new Date();
  nacionalidade: string = ' ';
  status: string = ' ';
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
    @Inject(MAT_DIALOG_DATA) public data: Desenho
  ){ 
    if(data !== null)
      this.Desenho = data
  }
  

  enviaDados(){
    if(this.Desenho === null){
      this.envioService.sendDados(this.Desenho, this.origem).subscribe()
    }else{
      this.envioService.corrigeDados(this.Desenho, this.Desenho.id, this.origem).subscribe()
    }
    console.log(this.Desenho)
    this.fechar()    
  }
  
  fechar(){
    this.dialogRef.close()
    this.location.reload()
  }
}
