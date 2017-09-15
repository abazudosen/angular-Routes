import { Component } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding.component';


@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = 'cool string';
  numberInterpolation = 4;
 
 onTestColor(){
   return true;
 }

onClicked(value: string) {
  alert(value);
}

}
