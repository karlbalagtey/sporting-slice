import { all, call } from 'redux-saga/effects';

import { quoteSagas } from './quote/sagas';

export default function* rootSaga() {
  yield all([call(quoteSagas)]);
}
