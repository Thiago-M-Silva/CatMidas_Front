import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AnimeComponent } from './componentes/anime/anime.component';
import { SeriesComponent } from './componentes/series/series.component';
import { LivroComponent } from './componentes/livro/livro.component';
import { FilmeComponent } from './componentes/filme/filme.component';
import { NovelaComponent } from './componentes/novela/novela.component';
import { MangaComponent } from './componentes/manga/manga.component';
import { HomeComponent } from './componentes/home/home.component';
import { JogosComponent } from './componentes/jogos/jogos.component';
import { AudioComponent } from './componentes/audio/audio.component';
@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    SeriesComponent,
    LivroComponent,
    FilmeComponent,
    NovelaComponent,
    MangaComponent,
    HomeComponent,
    JogosComponent,
    AudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
