import {createAction, props} from "@ngrx/store";
import {Product} from "../../core/models/base-models/product/product";
import {GetProductsParams} from "../../core/models/dto/get-products-params";

export const START_FETCHING_PRODUCTS = "[PRODUCTS] START_FETCHING_PRODUCTS"
export const FETCHED_PRODUCTS = "[PRODUCTS] FETCHED_PRODUCTS"

export const ERROR_FETCHING_PRODUCTS = "[PRODUCTS] ERROR_FETCHING_PRODUCTS"



export const startFetchingProducts = createAction(
  START_FETCHING_PRODUCTS,
  props<{params : GetProductsParams}>()
)

export const fetchedProducts=createAction(
  FETCHED_PRODUCTS,
  props<{products: Product[]}>()
)

export const errorFetchingProducts=createAction(
  ERROR_FETCHING_PRODUCTS,
  props<{error : string}>()
)
