import {makePaymentRoutine, RESET_PAYMENT} from '../../actions';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case makePaymentRoutine.REQUEST:
      return {...state, loading: true};

    case makePaymentRoutine.SUCCESS: {
      return {
        ...state,
        error: null,
        data: action.payload,
      };
    }

    case makePaymentRoutine.FAILURE:
      return {...state, error: action.payload};

    case makePaymentRoutine.FULFILL:
      return {...state, loading: false};

    case RESET_PAYMENT:
      return {data: null, loading: false, error: null};

      // Default state
    default:
      return state;
  }
};

export default reducer;
