import { Component } from '@angular/core';
import { Desenho } from 'src/app/interfaces/Desenho';
import { EnvioService } from 'src/app/service/envio.service';
@Component({
  selector: 'app-desenho',
  templateUrl: './desenho.component.html',
  styleUrls: ['./desenho.component.css']
})
export class DesenhoComponent {
  // declaracao das variaveis com valores nulos 
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
  
  Desenhos: Desenho[] = [];

  constructor(private envioService: EnvioService){
    this.getDados();
  }

  ngOnInit(): void {
    this.getDados();
  }

  enviaDados(){
    this.envioService.sendDados(this.Desenho).subscribe();
    //fazer uma funcao para a atualizar a pagina, ao final do envio .subscribe(desenho => this.desenho.funcao )
    console.log(this.Desenho);
  }

  getDados(){
    this.envioService.getDados().subscribe((desenhos) => (this.Desenhos = desenhos));
  }

  deletaDados(id: number){
	  console.log(id);
    this.envioService.deletaDados(id).subscribe();
  }

  editaDados(desenho: Desenho){
    console.log(desenho);
    console.log(this.Desenho);
    this.envioService.corrigeDados(desenho, this.Desenho.id).subscribe();
  }
}
