import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { LateralBarComponent } from './components/lateral-bar/lateral-bar.component';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'CatMidas';
  creditos = 'Feito por Thiago Marcos da Silva';
  showSidebar = false;
  private screenSub!: Subscription;
  private mobileView = new BehaviorSubject<boolean>(window.innerWidth <= 576);
  mobileView$ = this.mobileView.asObservable();

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    this.mobileView.next(width <= 576);
  }

  ngOnInit(){
    this.screenSub = this.mobileView$.subscribe((isMobile) => {
      this.showSidebar = isMobile;
    });
  }

  ngOnDestroy(): void {
    this.screenSub.unsubscribe();
  }

  toggleSidebar(){
    this.showSidebar = !this.showSidebar;
  }
}
