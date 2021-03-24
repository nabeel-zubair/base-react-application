import { put, takeEvery, all } from 'redux-saga/effects';
import { dummyActions } from '../actions/';
import { ACTIONS } from '../actions/reduxActions';

function* dummySaga() {
    try {
        yield put(dummyActions.dummyAction.pending);
        yield put(dummyActions.dummyAction.success({ message: 'Success' }));
    } catch {
        yield put(dummyActions.dummyAction.error({ message: 'Error' }));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(ACTIONS.DUMMY_ACTION_BEGIN, dummySaga)]);
}
