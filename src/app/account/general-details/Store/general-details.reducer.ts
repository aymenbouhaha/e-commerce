import {createReducer, on} from "@ngrx/store";
import {User} from "../../../core/models/base-models/user";
import * as GeneralDetailsActions from "./general-details.action";

export interface AccountState {
  user :    User | null
  error :   string | null
  loading : boolean

}

const initialState : AccountState = {
  user : new User(1,"firas","saada","bizerta","","22221133"),
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
  ) ,
  on(GeneralDetailsActions.updateUser ,
    (state,{formData}) => {
      return {
          ...state,

          user : {...state.user , ...formData},
          error : null ,
          loading : false,
        }

    }
    )
)
