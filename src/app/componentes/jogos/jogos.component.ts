import { Component } from '@angular/core';
import { Jogos } from 'src/app/interfaces/Jogos';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent {
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
  
  Jogos: Jogos = {
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

  constructor( private envioService: EnvioService){
    this.getDados();
  }
  
  ngOnInit(): void {
    this.getDados();
  }

  enviaDados(){
    this.envioService.sendDados(this.Jogos).subscribe();
  }

  getDados(): void{
    this.envioService.getDados().subscribe((jogos) => (this.Jogos = jogos))
  }

  deletaDados(id: number){
	  console.log(id);
    this.envioService.deletaDados(id).subscribe();
  }

  editaDados(jogos: Jogos){
    console.log(jogos);
    console.log(this.Jogos);
    this.envioService.corrigeDados(jogos, this.Jogos.id).subscribe();
  }
}
