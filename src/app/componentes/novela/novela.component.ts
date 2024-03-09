import { Component } from '@angular/core';
import { Novela } from 'src/app/interfaces/Novela';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-novela',
  templateUrl: './novela.component.html',
  styleUrls: ['./novela.component.css']
})
export class NovelaComponent {
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

  constructor( private envioService: EnvioService ){
    this.getDados();
  }

  ngOnInit(){
    this.getDados();
  }

  enviaDados(){
    this.envioService.sendDados(this.Novela).subscribe();
    //fazer uma funcao para a atualizar a pagina, ao final do envio .subscribe(Novela => this.Novela.funcao )
    console.log(this.Novela);
  }

  getDados(){
    this.envioService.getDados().subscribe((novela) => (this.Novela = novela))
  }
  
  deletaDados(id: number){
	  console.log(id);
    this.envioService.deletaDados(id).subscribe();
  }

  editaDados(novela: Novela){
    console.log(novela);
    console.log(this.Novela);
    this.envioService.corrigeDados(novela, this.Novela.id).subscribe();
  }
}
