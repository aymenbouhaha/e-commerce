import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {UserRepositoryService} from "../../core/repositories/user-repository.service";
import {catchError, map, of, switchMap, tap} from "rxjs";
import * as AuthActions from "./auth.actions"


@Injectable()
export class AuthEffects{


  constructor(private action : Actions,
              private router : Router,
              private authRepository : UserRepositoryService,
              ) {
  }


  login=createEffect(()=>{
    return this.action.pipe(
      ofType(AuthActions.signInStarted),
      switchMap((credentials)=>{
        return this.authRepository.login(credentials.email,credentials.password).pipe(
          tap((value)=>{
            localStorage.setItem("token",value.token)
            // TODO :: Basket Setting
          }),
          map((value)=>{
            return AuthActions.signInSuccess(value)
          }),
          catchError((err)=>{
            return of(AuthActions.authenticationFailed(err))
          })
        )
      })
    )
    },{dispatch : true}
  )


  signUp=createEffect(()=>{
      return this.action.pipe(
        ofType(AuthActions.signUpStarted),
        switchMap((credentials)=>{
          return this.authRepository.signUp(credentials).pipe(
            map(()=>{
              return AuthActions.signUpSuccess()
            }),
            catchError((err)=>{
              return of(AuthActions.authenticationFailed(err))
            })
          )
        })
      )
    },{dispatch : true}
  )


  // TODO :: Dispatch Basket Action
  // setUpBasket=createEffect(()=>{
  //     return this.action.pipe(
  //       ofType(AuthActions.signInSuccess),
  //       switchMap((value)=>{
  //         return
  //       })
  //     )
  //   },{dispatch : true}
  // )


  signInSuccessRedirect= createEffect(()=>{
      return this.action.pipe(
        ofType(AuthActions.signInSuccess),
        tap(()=>{
          this.router.navigate(["/shop"])
        })
      )
    },{dispatch : false}
  )


}
