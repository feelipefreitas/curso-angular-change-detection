import { Component, DoCheck, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.scss']
})
export class Comp4Component implements OnInit, DoCheck {
  texto = 'Inicial';
  people = [
    { name: 'Laura' },
    { name: 'Joao' },
    { name: 'Maria' },
  ]

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('setTimeout COMP 4');
    //   this.texto = 'Atualizado';
    //   this._changeDetectorRef.detectChanges();
    // }, 2000);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck COMP 4');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterViewChecked COMP 4');
  }

  click() {
    console.log('click() COMP 4');
  }
}
