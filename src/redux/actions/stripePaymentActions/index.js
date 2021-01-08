import {createRoutine} from 'redux-saga-routines';
export const RESET_PAYMENT = 'RESET_PAYMENT';

const MAKE_PAYMENT = 'MAKE_PAYMENT';

export const makePaymentRoutine = createRoutine(MAKE_PAYMENT);

export const resetPayment = () => ({
  type: RESET_PAYMENT,
});

