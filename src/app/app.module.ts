import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeComponent } from './componentes/anime/anime.component';
import { SeriesComponent } from './componentes/series/series.component';
import { LivroComponent } from './componentes/livro/livro.component';
import { FilmeComponent } from './componentes/filme/filme.component';
import { NovelaComponent } from './componentes/novela/novela.component';
import { MangaComponent } from './componentes/manga/manga.component';
import { HomeComponent } from './componentes/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    SeriesComponent,
    LivroComponent,
    FilmeComponent,
    NovelaComponent,
    MangaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
