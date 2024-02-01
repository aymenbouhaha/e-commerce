import {createReducer, on} from "@ngrx/store";
import {User} from "../../../core/models/base-models/user";
import * as GeneralDetailsActions from "./general-details.action";

export interface AccountState {
  user :    User | null
  error :   string | null
  loading : boolean

}

const initialState : AccountState = {
  user : new User(1,"firas"),
  error : null ,
  loading : false
}

export const userReducer=createReducer(
  initialState ,
  on(GeneralDetailsActions.setUser ,
    (state, {user})=>{
      return {
        ...state,
        user : user,
        error : null ,
        loading : false,
      }
    }
 )
)
