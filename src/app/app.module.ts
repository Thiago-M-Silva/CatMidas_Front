import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeComponent } from './midias/anime/anime.component';
import { SeriesComponent } from './midias/series/series.component';
import { LivroComponent } from './midias/livro/livro.component';
import { FilmeComponent } from './midias/filme/filme.component';
import { NovelaComponent } from './midias/novela/novela.component';
import { MangaComponent } from './midias/manga/manga.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    SeriesComponent,
    LivroComponent,
    FilmeComponent,
    NovelaComponent,
    MangaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
