import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {stripePaymentMiddleware} from './middlewares';

import {rootReducer} from './reducers';
import rootSaga from './sagas';

export const initStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = compose(applyMiddleware(
      sagaMiddleware, stripePaymentMiddleware,
  ));

  const store = createStore(rootReducer, {}, enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
};
export default initStore();
