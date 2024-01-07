import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './componentes/home/home.component';
import { AnimeComponent } from './componentes/anime/anime.component';
import { FilmeComponent } from './componentes/filme/filme.component';
import { LivroComponent } from './componentes/livro/livro.component';
import { MangaComponent } from './componentes/manga/manga.component';
import { NovelaComponent } from './componentes/novela/novela.component';
import { SeriesComponent } from './componentes/series/series.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'anime', component: AnimeComponent},
  {path: 'filme', component: FilmeComponent},
  {path: 'livro', component: LivroComponent},
  {path: 'manga', component: MangaComponent},
  {path: 'novela', component: NovelaComponent},
  {path: 'serie', component: SeriesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
