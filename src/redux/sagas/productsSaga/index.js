import {put} from 'redux-saga/effects';
import {fetchProductsRoutine} from '../../actions';
import axios from 'axios';

export function* fetchProductsSaga() {
  try {
    yield put(fetchProductsRoutine.request());
    const products = yield axios.get(`${process.env.REACT_APP_API_URL}product`);
    yield put(fetchProductsRoutine.success(products.data));
  } catch (error) {
    yield put(fetchProductsRoutine.failure(error));
  } finally {
    yield put(fetchProductsRoutine.fulfill());
  }
}
