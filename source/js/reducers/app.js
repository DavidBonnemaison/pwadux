import {
  TEST_ACTION,
  TEST_ASYNC_ACTION_START,
  TEST_ASYNC_ACTION_ERROR,
  TEST_ASYNC_ACTION_SUCCESS
} from 'actions/app';

const initialState = {
  counter: 0,
  asyncLoading: false,
  asyncError: null,
  asyncData: null
};


export default function app(state = initialState, action = {}) {
  const { type } = action;
  switch (type) {
    case TEST_ACTION:
      return {...state, counter: state.counter + 1 };
    case TEST_ASYNC_ACTION_START:
      return {
        ...state,
        asyncLoading: true,
        asyncError: null
      };
    case TEST_ASYNC_ACTION_SUCCESS:
      return {
        ...state,
        asyncLoading: false,
        asyncData: action.data,
        asyncError: null
      };
    case TEST_ASYNC_ACTION_ERROR:
      return {
        ...state,
        asyncLoading: false,
        asyncError: action.data
      };
    default:
      return state;
  }
}
