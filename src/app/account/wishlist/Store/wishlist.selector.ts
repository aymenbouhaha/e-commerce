import {createFeatureSelector, createSelector} from "@ngrx/store";
import {wishlistState} from "./wishlist.reducer";

const wishlistFeatureState = createFeatureSelector<wishlistState>("wishlist")

export const selectWishlist = createSelector(
wishlistFeatureState,
  (state) => state.wishlist
)
