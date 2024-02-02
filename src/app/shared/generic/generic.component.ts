import {Store} from "@ngrx/store";
import {MatDialog} from "@angular/material/dialog";
import {Observable, Subscription} from "rxjs";
import {DialogComponent} from "../components/dialog/dialog.component";
import * as ProductsActions from "../../shop/store/product.actions";


export class GenericComponent{


  subscription : Subscription


  constructor(public error$ : Observable<string | null>,private genericStore : Store,private genericDialog : MatDialog) {
    this.subscription=this.error$.subscribe(
      (value)=>{
        if (value){
          this.openDialog(value)
        }
      }
    )
  }


  openDialog(msg : string): void {
    this.genericDialog.open(DialogComponent, {
      data: {
        message : msg,
        action : ProductsActions.clearProductError(),
        store : this.genericStore
      }
    });
  }


  destroySubscription(){
    this.subscription.unsubscribe()
  }

}
