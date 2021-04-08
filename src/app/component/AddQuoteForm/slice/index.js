import { createSlice } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { quoteSagas } from './sagas';

export const initialState = {
  quotes: null,
  quoteAdded: null,
  isFetching: false,
  isSuccessful: false,
  errorMessage: null,
};

const slice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    addQuoteStart(state, action) {
      state.isFetching = true;
      state.quoteAdded = action.payload;
    },
    addQuoteSuccess(state, action) {
      state.isSuccessful = true;
      state.quotes = action.payload;
      state.quoteAdded = false;
      state.isFetching = false;
    },
    addQuoteFailure(state, action) {
      state.errorMessage = action.payload;
      state.isFetching = false;
      state.isSuccessful = false;
    },
    resetAddQuote(state) {
      state.errorMessage = null;
      state.isSuccessful = false;
      state.isFetching = false;
      state.quoteAdded = null;
    },
  },
});

/**
 * `actions` will be used to trigger change in the state from where ever you want
 */
export const { actions: quoteActions, reducer } = slice;

/**
 * Let's turn this into a hook style usage.
 * This will inject the slice to redux store and return actions in case you want to use in the component
 */
export const useQuoteSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: quoteSagas });
  return { actions: slice.actions };
};
