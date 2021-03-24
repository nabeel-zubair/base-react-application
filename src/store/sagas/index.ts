import "regenerator-runtime/runtime";
import {all, spawn} from 'redux-saga/effects';

import dummySagas from './dummy.saga';

function* allSagas() {
    yield all([spawn(dummySagas)]);
}

export default function* root() {
    yield all([spawn(allSagas)]);
}
