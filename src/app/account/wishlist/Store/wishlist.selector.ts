import {createFeatureSelector, createSelector} from "@ngrx/store";
import {wishlistState} from "./wishlist.reducer";

const wishlistFeatureState = createFeatureSelector<wishlistState>("wishlist")

export const selectwishlist = createSelector(
wishlistFeatureState,
  (state) => state.wishlist
)
