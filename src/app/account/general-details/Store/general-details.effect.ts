import {Injectable} from "@angular/core";
import {UserRepositoryService} from "../../../core/repositories/user-repository.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as GeneralDetailsActions from "./general-details.action"
import {catchError, map, of, switchMap} from "rxjs";

@Injectable()
export class GeneralDetailsEffect {


  constructor(private userRepository : UserRepositoryService,private actions : Actions) {
  }



  updateUser = createEffect(()=>{
    return this.actions.pipe(
      ofType(GeneralDetailsActions.updateUserStart),
      switchMap((data)=>{
        return this.userRepository.updateUserData(data.userData).pipe(
          map(
            ()=>{
              return GeneralDetailsActions.updateUserSuccess({userData : data.userData})
            }
          ),
          catchError(err => of(GeneralDetailsActions.updateUserFail(err)))
        )
      })
    )
  })




}
