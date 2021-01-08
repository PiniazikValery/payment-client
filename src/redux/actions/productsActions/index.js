import {createRoutine} from 'redux-saga-routines';

const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProductsRoutine = createRoutine(FETCH_PRODUCTS);
