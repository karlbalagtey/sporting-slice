import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';

const selectSlice = state => state.quote || initialState;

export const selectQuotes = createSelector(
  [selectSlice],
  state => state.quotes,
);

export const selectQuoteAdded = createSelector(
  [selectSlice],
  state => state.quoteAdded,
);

export const selectIsFetching = createSelector(
  [selectSlice],
  state => state.isFetching,
);

export const selectIsSuccessful = createSelector(
  [selectSlice],
  state => state.isSuccessful,
);
