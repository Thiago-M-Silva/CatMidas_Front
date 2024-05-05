import { Component } from '@angular/core';
import { Jogos } from 'src/app/interfaces/Jogos';
import { EnvioService } from 'src/app/service/envio.service';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormJogosComponent } from 'src/app/popups/form-jogos/form-jogos.component';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent {
  private origem: string = 'jogo'; //identifica qual componente faz a requisicao

  id: number = 0;
  nome: string = ' ';
  autor: string  = ' ';
  descricao: string  = ' ';
  disponibilidade: string  = ' ';
  estudio: string  = ' ';
  status: string  = ' ';
  statusVisto: string  = ' ';
  dtLancamento: Date = new Date();
  duracaoMedia: number = 0;
  
  Jogo: Jogos = {
    id: this.id,
    nome: this.nome,
    autor: this.autor,
    descricao: this.descricao,
    disponibilidade: this.disponibilidade,
    estudio: this.estudio,
    status: this.status,
    statusVisto: this.statusVisto,
    dtLancamento: this.dtLancamento,
    duracaoMedia: this.duracaoMedia
  }

  Jogos: Jogos[] = [];

  constructor(private envioService: EnvioService,
              public dialog: MatDialog
  ){
    this.getDados();
  }
  
  ngOnInit(): void {
    this.getDados();
  }
  getDados(): void{
    this.envioService.getDados(this.origem).subscribe((jogos) => (this.Jogos = jogos))
  }

  deletaDados(id: number){
	  console.log(id);
    this.envioService.deletaDados(id, this.origem).subscribe();
  }

  editaDados(jogos: Jogos){
    const dialogRef = this.dialog.open(FormJogosComponent, {data: jogos, height: '75vh', width: '75vh'})
  }

  adicionar(){
    const dialogRef = this.dialog.open(FormJogosComponent, {height: '75vh', width: '75vh'})
    dialogRef.afterClosed()
  }

}
