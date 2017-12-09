import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
    pizzas: fromPizzas.PizzaState,
};

export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer,
}

export const getProductsState = createFeatureSelector<ProductsState>('products');

// Pizza state
export const getPizzaState = createSelector(getProductsState, (state: ProductsState) => state.pizzas);

export const getPizzasData = createSelector(getPizzaState, fromPizzas.getPizzasData);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
