import { Component } from '@angular/core';
import { Filmes } from 'src/app/interfaces/Filme';
import { EnvioService } from 'src/app/service/envio.service';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormFilmeComponent } from 'src/app/popups/form-filme/form-filme.component';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent {
// declaracao das variaveis com valores nulos
    id: number = 0;
    nome: string = ' ';
    diretor: string = ' ';
    descricao: string = ' ';
    disponibilidade: string = ' ';
    estudio: string = ' ';
    status: string = ' ';
    statusVisto: string = ' ';  
    duracao: number = 0;
    dtLancamento: Date = new Date();
    
    Filme: Filmes = {
      id: this.id,
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

    Filmes: Filmes[] = [];

    constructor(private envioService: EnvioService,
                public dialog: MatDialog
    ){
      this.getDados();
    }
    
    ngOnInit(): void {
      this.getDados()
    }
    
    getDados(): void{
      this.envioService.getDados().subscribe((filme) => (this.Filme = filme))
    }

    deletaDados(id: number){
      console.log(id);
      this.envioService.deletaDados(id).subscribe();
    }

    editaDados(filme: Filmes){
      this.envioService.corrigeDados(filme, this.Filme.id).subscribe();
    }
  
    adicionar(){
      const dialogRef = this.dialog.open(FormFilmeComponent, {height: '75vh', width: '75vh'})
      dialogRef.afterClosed()
    }
}
