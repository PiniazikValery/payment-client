import {takeLatest, all} from 'redux-saga/effects';

import {
  fetchProductsRoutine,
  makePaymentRoutine,
} from '../actions';

import {fetchProductsSaga} from './productsSaga';
import {makePaymentSaga} from './stripePaymentSaga';

function* actionWatcher() {
  yield takeLatest(fetchProductsRoutine.TRIGGER, fetchProductsSaga);
  yield takeLatest(makePaymentRoutine.TRIGGER, makePaymentSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
