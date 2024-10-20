import { Component } from '@angular/core';
import { LateralBarComponent } from './components/lateral-bar/lateral-bar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CatMidas';
  creditos = 'Feito por Thiago Marcos da Silva';
  mobile = false;

  OnInit(){
    if(window.screen.width === 360){
      this.mobile = true;
    }
  }

}
