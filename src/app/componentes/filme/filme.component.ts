import { Component } from '@angular/core';
import { Filmes } from 'src/app/interfaces/Filme';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent {
// declaracao das variaveis com valores nulos
    nome = ' ';
    diretor = ' ';
    descricao = ' ';
    disponibilidade = ' ';
    estudio = ' ';
    status = ' ';
    statusVisto = ' ';  
    duracao = 0;
    dtLancamento = 0;
    
    constructor( private envioService: EnvioService){
      this.getDados();
    }
    
    ngOnInit(): void {}

    Filme: Filmes = {
      nome: this.nome,
      diretor: this.diretor,
      descricao: this.descricao,
      disponibilidade: this.disponibilidade,
      status: this.status,
      statusVisto: this.statusVisto,  
      estudio: this.estudio,
      duracao: this.duracao,
      dtLancamento: this.dtLancamento
    }

    enviaDados(){}

    getDados(): void{
      this.envioService.getDados().subscribe((filme) => (this.Filme = filme))
    }
}
