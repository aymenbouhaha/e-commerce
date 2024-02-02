import {Component, Input} from '@angular/core';
import {Product} from "../../../core/models/base-models/product/product";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {BasketState} from "../../../cart/store/cart.reducer";
import {startAddToBasket} from "../../../cart/store/cart.actions";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {


  @Input() product! : Product


  constructor(private router: Router,private store : Store<BasketState>) {
  }

  onClick(){
    this.router.navigate([`/product/${this.product.id}`])
  }

  onAddToCart() {
    this.store.dispatch(startAddToBasket({productId: this.product,itemsNumber : 1}))
  }
}
