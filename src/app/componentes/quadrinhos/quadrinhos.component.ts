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
  
  constructor(private envioService: EnvioService ){
    this.getDados();
  }

  ngOnInit(){
    this.getDados();
  }

  adicionar(){
    // popup
    // this.envioService.sendDados(this.Quadrinho).subscribe();
    // fazer uma funcao para a atualizar a pagina, ao final do envio .subscribe(Quadrinho => this.Quadrinho.funcao )
    // console.log(this.Quadrinho);
  }

  getDados(): void{
    this.envioService.getDados().subscribe((quadrinho) => (this.Quadrinho = quadrinho))
  }

  deletaDados(id: number){
	  console.log(id);
    this.envioService.deletaDados(id).subscribe();
  }

  editaDados(quadrinho: Quadrinhos){
    console.log(quadrinho);
    console.log(this.Quadrinho);
    this.envioService.corrigeDados(quadrinho, this.Quadrinho.id).subscribe();
  }
}
