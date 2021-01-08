import {put} from 'redux-saga/effects';
import {makePaymentRoutine} from '../../actions';
import axios from 'axios';

export function* makePaymentSaga({payload}) {
  try {
    const {
      cardElement, type, amount,
      stripe, productId, paymentDetails,
    } = payload;

    yield put(makePaymentRoutine.request());
    const {error, paymentMethod} = yield stripe.createPaymentMethod({
      type,
      card: cardElement,
    });
    if (error) {
      throw error;
    } else {
      const payment =
      yield axios.post(`${process.env.REACT_APP_API_URL}stripe/charge`,
          {
            productId,
            paymentDetails,
            pMethodId: paymentMethod.id,
            amount,
          });
      yield put(makePaymentRoutine.success(payment.data.charge));
    }
  } catch (error) {
    yield put(makePaymentRoutine.failure(error));
  } finally {
    yield put(makePaymentRoutine.fulfill());
  }
}
