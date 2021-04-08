import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import { quoteActions as actions } from '.';
import { selectQuotes, selectQuoteAdded } from './selectors';

export function* addQuote() {
  try {
    const quoteAdded = yield select(selectQuoteAdded);
    const quotesCollection = yield select(selectQuotes);
    let quotes = quotesCollection || [];

    if (quotesCollection) {
      quotes = [...quotesCollection, quoteAdded];
    } else {
      quotes.push(quoteAdded);
    }

    yield put(actions.addQuoteSuccess(quotes));
  } catch (error) {
    console.log(error);
    yield put(actions.addQuoteFailure(error));
  }
}

export function* onAddQuoteStart() {
  yield takeLatest(actions.addQuoteStart.type, addQuote);
}

export function* quoteSagas() {
  yield all([call(onAddQuoteStart)]);
}
