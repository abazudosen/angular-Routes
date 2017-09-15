import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
   {{results}}
  `,
  styles: []
})
export class PropertyBindingComponent{
  @Input() results: number = 5;

}
