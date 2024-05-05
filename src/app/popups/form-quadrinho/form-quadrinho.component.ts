import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Quadrinhos } from 'src/app/interfaces/Quadrinhos';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-form-quadrinho',
  templateUrl: './form-quadrinho.component.html',
  styleUrl: './form-quadrinho.component.css'
})
export class FormQuadrinhoComponent {
  private origem: string = 'quadrinho'; //identifica qual componente faz a requisicao
  private Location!: Location;

  id: number = 0;
  nome: string = ' ';
  autor: string = ' ';
  descricao: string = ' ';
  disponibilidade: string = ' ';
  nacionalidade: string = ' ';
  status: string = ' ';
  statusVisto: string = ' ';
  caps: number = 0;
  dtLancamento: Date = new Date();
  
  Quadrinho: Quadrinhos = {
    id: this.id,
    nome: this.nome,
    autor: this.autor,
    descricao: this.descricao,
    disponibilidade: this.disponibilidade,
    nacionalidade: this.nacionalidade,
    status: this.status,
    statusVisto: this.statusVisto,
    caps: this.caps,
    dtLancamento: this.dtLancamento
  }
  constructor(
    private envioService: EnvioService,
    public dialogRef: MatDialogRef<FormQuadrinhoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Quadrinhos,
  ){
    if(data !== null)
      this.Quadrinho = data
  }

  enviaDados(){
    if(this.Quadrinho === null){
      this.envioService.sendDados(this.Quadrinho, this.origem).subscribe()
    }else{
      this.envioService.corrigeDados(this.Quadrinho, this.Quadrinho.id, this.origem).subscribe()
    }
    console.log(this.Quadrinho)
    this.fechar()  
  }
  
  fechar(){
    this.dialogRef.close()
    this.Location.reload()
  }

}
