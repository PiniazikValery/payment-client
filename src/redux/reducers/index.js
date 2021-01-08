import {combineReducers} from 'redux';

import productsReducer from './productsReducer';
import stripePaymentReducer from './stripePaymentReducer';
import historyReducer from './historyReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  payment: stripePaymentReducer,
  history: historyReducer,
});
