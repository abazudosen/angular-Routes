import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()"> click here </button>
    
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>()
  
  onClicked(){
    // alert('you clicked on me');
    this.clicked.emit('yea it works!!!');
  }

   
}
