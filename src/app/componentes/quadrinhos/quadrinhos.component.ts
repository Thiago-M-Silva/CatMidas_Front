import { Component } from '@angular/core';
import { Quadrinhos } from 'src/app/interfaces/Quadrinhos';
import { EnvioService } from 'src/app/service/envio.service';
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
  
  Quadrinhos: Quadrinhos = {
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
  
  constructor(private envioService: EnvioService ){
    this.getDados();
  }

  ngOnInit(){
    this.getDados();
  }

  enviaDados(){
    this.envioService.sendDados(this.Quadrinhos).subscribe();
    //fazer uma funcao para a atualizar a pagina, ao final do envio .subscribe(Quadrinhos => this.Quadrinhos.funcao )
    console.log(this.Quadrinhos);
  }

  getDados(): void{
    this.envioService.getDados().subscribe((quadrinhos) => (this.Quadrinhos = quadrinhos))
  }

  deletaDados(id: number){
	  console.log(id);
    this.envioService.deletaDados(id).subscribe();
  }

  editaDados(quadrinho: Quadrinhos){
    console.log(quadrinho);
    console.log(this.Quadrinhos);
    this.envioService.corrigeDados(quadrinho, this.Quadrinhos.id).subscribe();
  }
}
