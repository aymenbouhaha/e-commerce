import {createAction, props} from "@ngrx/store";


import {SignUpDto} from "../../core/models/dto/sign-up.dto";
import {SignInSuccessDto} from "../../core/models/dto/sign-in-success-dto";

const SIGN_IN_STARTED = "[AUTH] SIGN_IN_STARTED"

const SIGN_UP_STARTED = "[AUTH] SIGN_UP_STARTED"

const AUTHENTICATION_FAIL = "[AUTH] AUTHENTICATION_FAIL"

const SIGN_IN_SUCCESS = "[AUTH] SIGN_IN_SUCCESS"

const SIGN_UP_SUCCESS = "[AUTH] SIGN_UP_SUCCESS"

const LOGOUT = "[AUTH] LOGOUT"



export const signInStarted =createAction(
  SIGN_IN_STARTED,
  props<{email : string,password: string}>()
)


export const signUpStarted =createAction(
  SIGN_UP_STARTED,
  props<SignUpDto>()
)

export const signInSuccess =createAction(
  SIGN_IN_SUCCESS,
  props<SignInSuccessDto>()
)

export const signUpSuccess =createAction(SIGN_UP_SUCCESS)

export const authenticationFailed = createAction(
  AUTHENTICATION_FAIL,
  props<{error : string}>()
)

export const logout = createAction(LOGOUT)
