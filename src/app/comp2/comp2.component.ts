import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp2Component implements OnInit, DoCheck {
  @Input() numero = 0;
  @Input() person = { name: '' };

  @Output() emmiter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('setTimeout COMP 2')
    //   this.emmiter.emit();
    // }, 2000);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck COMP 2');
  }
}
