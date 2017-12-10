import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../app/store';
import * as pizzaActions from '../actions/pizzas.actions';
import * as fromServices from '../../services';
import { Pizza } from 'src/products/models/pizza.model';

@Injectable()
export class PizzasEffects {
    constructor(private actions$: Actions, private pizzaService: fromServices.PizzasService) { }

    @Effect()
    loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
        switchMap(() => this.pizzaService.getPizzas().pipe(
            map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
            catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
        ))
    );

    @Effect()
    createPizza$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA).pipe(
        map((action: pizzaActions.CreatePizza) => action.payload),
        switchMap((pizza: Pizza) => this.pizzaService.createPizza(pizza).pipe(
            map((pizza: Pizza) => new pizzaActions.CreatePizzaSuccess(pizza)),
            catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
        ))
    );

    @Effect()
    createPizzaSuccess$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA_SUCCESS).pipe(
        map((action: pizzaActions.CreatePizzaSuccess) => action.payload),
        map((pizza: Pizza) => new fromRoot.Go({ path: ['/products', pizza.id] }))
    )

    @Effect()
    updatePizza$ = this.actions$.ofType(pizzaActions.UPDATE_PIZZA).pipe(
        map((action: pizzaActions.UpdatePizza) => action.payload),
        switchMap((pizza: Pizza) => this.pizzaService.updatePizza(pizza).pipe(
            map((pizza: Pizza) => new pizzaActions.UpdatePizzaSuccess(pizza)),
            catchError(error => of(new pizzaActions.UpdatePizzaFail(error)))
        ))
    );

    @Effect()
    deletePizza$ = this.actions$.ofType(pizzaActions.DELETE_PIZZA).pipe(
        map((action: pizzaActions.DeletePizza) => action.payload),
        switchMap((pizza: Pizza) => this.pizzaService.removePizza(pizza).pipe(
            map(() => new pizzaActions.DeletePizzaSuccess(pizza)),
            catchError(error => of(new pizzaActions.DeletePizzaFail(error)))
        ))
    );

    @Effect()
    handlePizzaSuccess$ = this.actions$.ofType(pizzaActions.UPDATE_PIZZA_SUCCESS, pizzaActions.DELETE_PIZZA_SUCCESS).pipe(
        map(pizza => new fromRoot.Go({ path: ['/products'] }))
    )
}
