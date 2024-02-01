import {Component, Input} from '@angular/core';
import {Product} from "../../../core/models/base-models/product/product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {


  @Input() product! : Product

}
