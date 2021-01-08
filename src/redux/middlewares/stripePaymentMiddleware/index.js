import {makePaymentRoutine, callHistoryMethod} from '../../actions';

export default (store) => (next) => (action) => {
  const {type} = action;
  if (type === makePaymentRoutine.FULFILL) {
    if (store.getState().payment.error) {
      store.dispatch(
          callHistoryMethod('replace', [`/failure_payment`]),
      );
    } else {
      store.dispatch(
          callHistoryMethod('replace', [`/success_payment`]),
      );
    }
  }
  return next(action);
};
