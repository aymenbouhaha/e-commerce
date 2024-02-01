import { Component } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  currentTab: string = 'Tab1';

  openTab(tabName: string) {
    this.currentTab = tabName;
  }

}
