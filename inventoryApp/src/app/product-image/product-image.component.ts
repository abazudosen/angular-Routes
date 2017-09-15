import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-image',
  template: `
    <img class="product-image" [src]="product.imageURL">
    `
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') ccClass = 'ui small image';

  constructor() { }

  ngOnInit() {
  }

}
