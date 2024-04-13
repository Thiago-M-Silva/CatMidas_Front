import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Quadrinhos } from 'src/app/interfaces/Quadrinhos';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-form-quadrinho',
  standalone: true,
  imports: [MatFormFieldModule, MatCheckbox, MatInput, FormsModule],
  templateUrl: './form-quadrinho.component.html',
  styleUrl: './form-quadrinho.component.css'
})
export class FormQuadrinhoComponent {
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
    public dialogRef: MatDialogRef<FormQuadrinhoComponent>
  ){}

  enviaDados(){
    this.envioService.sendDados(this.Quadrinho).subscribe()
  }
  
  fechar(){
    this.dialogRef.close()
  }

}
