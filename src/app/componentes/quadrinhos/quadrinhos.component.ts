import { Component } from '@angular/core';
import { Quadrinhos } from 'src/app/interfaces/Quadrinhos';
import { EnvioService } from 'src/app/service/envio.service';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormQuadrinhoComponent } from 'src/app/popups/form-quadrinho/form-quadrinho.component';

@Component({
  selector: 'app-quadrinhos',
  templateUrl: './quadrinhos.component.html',
  styleUrls: ['./quadrinhos.component.css']
})
export class QuadrinhosComponent {
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

  Quadrinhos: Quadrinhos[] = [];
  
  constructor(private envioService: EnvioService,
              public dialog: MatDialog
   ){
    this.getDados();
  }

  ngOnInit(){
    this.getDados();
  }
  
  getDados(): void{
    this.envioService.getDados().subscribe((quadrinho) => (this.Quadrinho = quadrinho))
  }

  deletaDados(id: number){
	  console.log(id);
    this.envioService.deletaDados(id).subscribe();
  }

  editaDados(quadrinho: Quadrinhos){
    const dialogRef = this.dialog.open(FormQuadrinhoComponent, {data: quadrinho ,height: '75vh', width: '75vw'})
  }
  
  adicionar(){
    const dialogRef = this.dialog.open(FormQuadrinhoComponent, {height: '75vh', width: '75vw'})
    dialogRef.afterClosed()
  }
}
