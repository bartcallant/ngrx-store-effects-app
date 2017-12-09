import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as toppingsActions from '../actions/toppings.actions';
import * as fromServices from '../../services';

@Injectable()
export class ToppingsEffects {
    constructor(private actions$: Actions, private toppingsService: fromServices.ToppingsService) { }

    @Effect()
    loadTippings$ = this.actions$.ofType(toppingsActions.LOAD_TOPPINGS).pipe(
        switchMap(() => this.toppingsService.getToppings().pipe(
            map(toppings => new toppingsActions.LoadToppingsSuccess(toppings)),
            catchError(error => of(new toppingsActions.LoadToppingsFail(error)))
        ))
    );
}
