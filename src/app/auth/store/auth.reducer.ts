import {createReducer, on} from "@ngrx/store";
import * as AuthActions from "./auth.actions"
import {state} from "@angular/animations";

export interface AuthState{

  token : string | null

  isAuthenticated : boolean

  loading : boolean

  error : string | null

}

export const authInitialState :AuthState ={
  token : null,
  isAuthenticated : false,
  loading : false,
  error : null
}


export const authReducer=createReducer(
  authInitialState,
  on(
    AuthActions.signInSuccess,(state,action)=>{
      return {
        ...state,
        token : action.token,
        isAuthenticated : true,
        error : null,
        loading : false
      }
    }
  ),
  on(
    AuthActions.signInStarted,(state,action)=>{
      return {
        ...state,
        isAuthenticated : false,
        error : null,
        loading : true
      }
    }
  ),
  on(
    AuthActions.signUpStarted,(state,action)=>{
      return {
        ...state,
        isAuthenticated : false,
        error : null,
        loading : true
      }
    }
  ),
  on(
    AuthActions.signUpSuccess,(state,action)=>{
      return {
        ...state,
        isAuthenticated : false,
        error : null,
        loading : false
      }
    }
  ),
  on(
    AuthActions.authenticationFailed,(state,action)=>{
      return {
        ...state,
        token : null,
        isAuthenticated : false,
        error : action.error,
        loading : false
      }
    }
  ),
  on(AuthActions.logout,(state)=>{
    return{
      ...state,
      isAuthenticated : false,
      error : null,
      token : null
    }
  })
)
