import {
  ITEMS_LIST_REJECTED,
  ITEMS_LIST_FULFILLED,
  ITEMS_LIST_PENDING,
  RESET
} from "../actions/actionsTypes.js";

const initialState = {
  items: [],
  error: null,
  fetching: false,
  fetched: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_LIST_PENDING: {
      return {
        ...state,
        fetched: false,
        fetching: true
      };
    }

    case ITEMS_LIST_REJECTED: {
      const error = action.payload;
      const errors = error.response.data.errors;
      return {
        ...state,
        message:
          errors != null && Array.isArray(errors) ? errors[0].message : null,
        error: error.response.data.title,
        fetched: false,
        fetching: false
      };
    }

    case ITEMS_LIST_FULFILLED: {
      const items = action.payload.data.items;

      return {
        ...state,
        items,
        error: null,
        message: null,
        fetched: true,
        fetching: false
      };
    }

    case RESET: {
      return initialState;
    }

    default:
      return state;
  }
};
