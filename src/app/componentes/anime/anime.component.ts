import { Component } from '@angular/core';
import { Desenho } from 'src/app/interfaces/Desenho';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {
  Anime?: Desenho = {
    nome: " "
  };
}
