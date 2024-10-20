import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { DesenhoComponent } from './pages/desenho/desenho.component';
import { FilmeComponent } from './pages/filme/filme.component';
import { LivroComponent } from './pages/livro/livro.component';
import { QuadrinhosComponent } from './pages/quadrinhos/quadrinhos.component';
import { NovelaComponent } from './pages/novela/novela.component';
import { SeriesComponent } from './pages/series/series.component';
import { JogosComponent } from './pages/jogos/jogos.component';
import { AudioComponent } from './pages/audio/audio.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'desenho', component: DesenhoComponent},
  {path: 'filme', component: FilmeComponent},
  {path: 'livro', component: LivroComponent},
  {path: 'quadrinhos', component: QuadrinhosComponent},
  {path: 'novela', component: NovelaComponent},
  {path: 'serie', component: SeriesComponent},
  {path: 'jogos', component: JogosComponent},
  {path: 'audio', component: AudioComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
