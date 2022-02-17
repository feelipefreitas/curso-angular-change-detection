import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  numero = 0;
  person = { name: 'Lucas' };
  
  ngDoCheck(): void {
    console.log('ngDoCheck APP');
  }

  increment() {
    console.log('increment APP');
    this.numero += 1;
    this.person = { name: 'Atualizado' };
  }
}
