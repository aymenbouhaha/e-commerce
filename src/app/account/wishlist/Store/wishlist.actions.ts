import {createAction, props} from "@ngrx/store";
import {Product} from "../../../core/models/base-models/product/product";

export const Delete = createAction(
  'delete',
  props<{productId: number}>()
)
export const Init=createAction(
  'init'
)
export const Set=createAction(
  'set' , props<{wishlist :Product[] | null }>()
)
