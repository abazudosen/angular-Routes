import { Component } from '@angular/core';
import { LifecycleComponent } from './lifecycle.component';

@Component({
  selector: 'app-root',
  template: `
      <h1>Root component </h1>
     <app-databinding></app-databinding>
     <app-lifecycle *ngIf=!delete [inbound]="inboundable">
        <p>{{test}}</p>
     </app-lifecycle>
     <button (click)="test = 'some new value'">test click</button>
     <button (click)="delete = true"> click</button>
     <button (click)="inboundable = 2000">bound click</button>
      `,
})
export class AppComponent {
  title = 'hello world!';

  delete: boolean = false;
  test: string = 'something changed!';
  inboundable = 1000;
}
