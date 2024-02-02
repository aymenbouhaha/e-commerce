import {createAction, props} from "@ngrx/store";
import {User} from "../../../core/models/base-models/user";


export const setUser=createAction(
  'User',
        props<{user : User}>()
)
export const updateUser=createAction(
  'update' ,
  props<{formData : any}>()
)
