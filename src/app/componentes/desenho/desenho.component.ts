import { Component } from '@angular/core';
import { Desenho } from 'src/app/interfaces/Desenho';
import { EnvioService } from 'src/app/service/envio.service';
import { MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormDesenhoComponent } from 'src/app/popups/form-desenho/form-desenho.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-desenho',
  templateUrl: './desenho.component.html',
  styleUrls: ['./desenho.component.css']
})
export class DesenhoComponent {
  //este componente esta mapeado como "Anime" no backend

  private origem: string = 'anime'; //identifica qual componente faz a requisicao
  private location!: Location; //para reiniciar a pagina
  
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
  status: string = ' '; //em lancamento, finalizado
  statusVisto: string = ' ';
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

  constructor(
    private envioService: EnvioService,
    // private location: Location,
    public dialog: MatDialog)
  {
    this.getDados();
  }

  ngOnInit(): void {
    this.getDados();
  }

  getDados(){
    this.envioService.getDados(this.origem).subscribe((desenhos) => (this.Desenhos = desenhos));
  }

  deletaDados(id: number){
    this.envioService.deletaDados(id, this.origem).subscribe();
    this.location.reload()
  }

  editaDados(desenho: Desenho){
    const dialogRef = this.dialog.open(FormDesenhoComponent, {data: desenho, height: '75vh', width: '75vw'})
  }

  adicionar(){
    const dialogRef = this.dialog.open(FormDesenhoComponent, {height: '75vh', width: '75vw'})
  }
}
