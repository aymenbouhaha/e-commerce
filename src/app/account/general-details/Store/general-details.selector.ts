import {AccountState} from "./general-details.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {User} from "../../../core/models/base-models/user";

const userFeatureState = createFeatureSelector<AccountState>("user")

export const selectUser = createSelector(
  userFeatureState ,
  (state) => state.user
)
