const initialState = {
  items: [],
  error: null,
  fetching: false,
  fetched: false
};

export default (state = initialState, action) => {
  return {
    ...state
  };
};
