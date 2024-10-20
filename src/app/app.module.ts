import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { Location } from '@angular/common';

import { AppComponent } from './app.component';
import { DesenhoComponent } from './pages/desenho/desenho.component';
import { SeriesComponent } from './pages/series/series.component';
import { LivroComponent } from './pages/livro/livro.component';
import { FilmeComponent } from './pages/filme/filme.component';
import { NovelaComponent } from './pages/novela/novela.component';
import { QuadrinhosComponent } from './pages/quadrinhos/quadrinhos.component';
import { HomeComponent } from './pages/home/home.component';
import { JogosComponent } from './pages/jogos/jogos.component';
import { AudioComponent } from './pages/audio/audio.component';
import { FormDesenhoComponent } from './popups/form-desenho/form-desenho.component';
import { FormAudioComponent } from './popups/form-audio/form-audio.component';
import { FormFilmeComponent } from './popups/form-filme/form-filme.component';
import { FormJogosComponent } from './popups/form-jogos/form-jogos.component';
import { FormLivroComponent } from './popups/form-livro/form-livro.component';
import { FormNovelaComponent } from './popups/form-novela/form-novela.component';
import { FormQuadrinhoComponent } from './popups/form-quadrinho/form-quadrinho.component';
import { FormSerieComponent } from './popups/form-serie/form-serie.component';
import { LateralBarComponent } from "./components/lateral-bar/lateral-bar.component";
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    DesenhoComponent,
    SeriesComponent,
    LivroComponent,
    FilmeComponent,
    NovelaComponent,
    QuadrinhosComponent,
    HomeComponent,
    JogosComponent,
    AudioComponent,
    FormDesenhoComponent,
    FormAudioComponent,
    FormFilmeComponent,
    FormJogosComponent,
    FormLivroComponent,
    FormNovelaComponent,
    FormQuadrinhoComponent,
    FormSerieComponent,
    LateralBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatSidenavModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
