import {CALL_HISTORY_METHOD} from '../../actions';

export const initialState = {
  methodName: null,
  methodArguments: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CALL_HISTORY_METHOD: {
      const {methodName, methodArguments} = action.payload;
      return {...state, methodName, methodArguments};
    }
    default:
      return state;
  }
};

export default reducer;
