import { Component } from '@angular/core';
import { Desenho } from 'src/app/interfaces/Desenho';
import { EnvioService } from 'src/app/service/envio.service';
import { MatDialog } from '@angular/material/dialog';
import { FormDesenhoComponent } from 'src/app/popups/form-desenho/form-desenho.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-desenho',
  templateUrl: './desenho.component.html',
  styleUrls: ['./desenho.component.css']
})
export class DesenhoComponent {
  // declaracao das variaveis com valores nulos 
  id: number = 0;
  nome: string = 'teste';
  autor: string  =  'teste';
  descricao: string ='teste';
  disponibilidade: string ='teste';
  estudio: string ='teste';
  maxEps: number = 0;
  dtLancamento: Date = new Date();
  nacionalidade: string = 'teste';
  status: string = 'teste'; //em lancamento, finalizado
  statusVisto: string = 'teste';
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
  
  Desenhos: Desenho[] = [this.Desenho];

  constructor(private envioService: EnvioService,
              public dialog: MatDialog){
    this.getDados();
  }

  ngOnInit(): void {
    this.getDados();
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

  //teste popup
  adicionar(){
   const dialogRef = this.dialog.open(FormDesenhoComponent)

   dialogRef.afterClosed() //implementar funcao para reiniciar a pagina
  }
}
