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

import { AppComponent } from './app.component';
import { DesenhoComponent } from './componentes/desenho/desenho.component';
import { SeriesComponent } from './componentes/series/series.component';
import { LivroComponent } from './componentes/livro/livro.component';
import { FilmeComponent } from './componentes/filme/filme.component';
import { NovelaComponent } from './componentes/novela/novela.component';
import { QuadrinhosComponent } from './componentes/quadrinhos/quadrinhos.component';
import { HomeComponent } from './componentes/home/home.component';
import { JogosComponent } from './componentes/jogos/jogos.component';
import { AudioComponent } from './componentes/audio/audio.component';
import { FormDesenhoComponent } from './popups/form-desenho/form-desenho.component';

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
    FormDesenhoComponent
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
