import { Action } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

// Load pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
}
export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any) { }
}
export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: Pizza[]) { }
}

type LoadPizzaActions = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess

// Create pizza
export const CREATE_PIZZA = '[Pizza] Create Pizza';
export const CREATE_PIZZA_FAIL = '[Pizza] Create Pizza Fail';
export const CREATE_PIZZA_SUCCESS = '[Pizza] Create Pizza Success';

export class CreatePizza implements Action {
    readonly type = CREATE_PIZZA;
    constructor(public payload: Pizza) { }
}
export class CreatePizzaFail implements Action {
    readonly type = CREATE_PIZZA_FAIL;
    constructor(public payload: any) { }
}
export class CreatePizzaSuccess implements Action {
    readonly type = CREATE_PIZZA_SUCCESS;
    constructor(public payload: Pizza) { }
}

type CreatePizzaActions = CreatePizza | CreatePizzaFail | CreatePizzaSuccess;

// Update pizza
export const UPDATE_PIZZA = '[Pizza] Update Pizza';
export const UPDATE_PIZZA_FAIL = '[Pizza] Update Pizza Fail';
export const UPDATE_PIZZA_SUCCESS = '[Pizza] Update Pizza Success';

export class UpdatePizza implements Action {
    readonly type = UPDATE_PIZZA;
    constructor(public payload: Pizza) { }
}
export class UpdatePizzaFail implements Action {
    readonly type = UPDATE_PIZZA_FAIL;
    constructor(public payload: any) { }
}
export class UpdatePizzaSuccess implements Action {
    readonly type = UPDATE_PIZZA_SUCCESS;
    constructor(public payload: Pizza) { }
}

type UpdatePizzaActions = UpdatePizza | UpdatePizzaFail | UpdatePizzaSuccess;

// Delete pizza
export const DELETE_PIZZA = '[Pizza] Delete Pizza';
export const DELETE_PIZZA_FAIL = '[Pizza] Delete Pizza Fail';
export const DELETE_PIZZA_SUCCESS = '[Pizza] Delete Pizza Success';

export class DeletePizza implements Action {
    readonly type = DELETE_PIZZA;
    constructor(public payload: Pizza) { }
}
export class DeletePizzaFail implements Action {
    readonly type = DELETE_PIZZA_FAIL;
    constructor(public payload: any) { }
}
export class DeletePizzaSuccess implements Action {
    readonly type = DELETE_PIZZA_SUCCESS;
    constructor(public payload: Pizza) { }
}

type DeletePizzaActions = DeletePizza | DeletePizzaFail | DeletePizzaSuccess;

export type PizzasAction = LoadPizzaActions | CreatePizzaActions | UpdatePizzaActions | DeletePizzaActions;
