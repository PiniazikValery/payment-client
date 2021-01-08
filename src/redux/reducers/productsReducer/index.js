import {fetchProductsRoutine} from '../../actions';

const initialState = {
  data: null,
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchProductsRoutine.REQUEST:
      return {...state, loading: true};

    case fetchProductsRoutine.SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
      };
    }

    case fetchProductsRoutine.FAILURE:
      return {...state, error: action.payload};

    case fetchProductsRoutine.FULFILL:
      return {...state, loading: false};

      // Default state
    default:
      return state;
  }
};

export default reducer;
