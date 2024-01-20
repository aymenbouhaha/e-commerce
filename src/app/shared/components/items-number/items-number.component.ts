import { Component } from '@angular/core';

@Component({
  selector: 'app-items-number',
  templateUrl: './items-number.component.html',
  styleUrls: ['./items-number.component.css']
})
export class ItemsNumberComponent {

  itemsNumber : number =0

  increment(){
    this.itemsNumber++;
  }

  decrement(){
    if(this.itemsNumber==0){
      return;
    }
    this.itemsNumber--
  }


}
