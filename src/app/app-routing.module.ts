import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './componentes/home/home.component';
import { DesenhoComponent } from './componentes/desenho/desenho.component';
import { FilmeComponent } from './componentes/filme/filme.component';
import { LivroComponent } from './componentes/livro/livro.component';
import { QuadrinhosComponent } from './componentes/quadrinhos/quadrinhos.component';
import { NovelaComponent } from './componentes/novela/novela.component';
import { SeriesComponent } from './componentes/series/series.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'desenho', component: DesenhoComponent},
  {path: 'filme', component: FilmeComponent},
  {path: 'livro', component: LivroComponent},
  {path: 'quadrinhos', component: QuadrinhosComponent},
  {path: 'novela', component: NovelaComponent},
  {path: 'serie', component: SeriesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
