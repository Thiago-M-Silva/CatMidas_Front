import { Component } from '@angular/core';
import { Quadrinhos } from 'src/app/interfaces/Quadrinhos';
import { EnvioService } from 'src/app/service/envio.service';
@Component({
  selector: 'app-quadrinhos',
  templateUrl: './quadrinhos.component.html',
  styleUrls: ['./quadrinhos.component.css']
})
export class QuadrinhosComponent {
  nome = ' ';
  autor = ' ';
  descricao = ' ';
  disponibilidade = ' ';
  nacionalidade = ' ';
  status = ' ';
  statusVisto = ' ';
  caps = 0;
  dtLancamento = 0;

  constructor(private envioService: EnvioService ){
    this.getDados();
  }

  ngOnInit(){}

  Quadrinhos: Quadrinhos = {
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

  enviaDados(){}

  getDados(): void{
    this.envioService.getDados().subscribe((quadrinhos) => (this.Quadrinhos = quadrinhos))
  }
}
