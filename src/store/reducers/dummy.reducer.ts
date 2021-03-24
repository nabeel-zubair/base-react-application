import { fromJS } from 'immutable';

import { ACTIONS } from '../actions/reduxActions';
import { FETCH_STATUS } from '../../assets/constants';
import { Generic } from '../../assets/types';

const testReducer = (state = fromJS({}), action: Generic) => {
    switch (action.type) {
        case ACTIONS.DUMMY_ACTION.PENDING:
            return state.setIn(
                ['test', 'loading'],
                action.status === FETCH_STATUS.LOADING,
            );
        case ACTIONS.DUMMY_ACTION.SUCCESS:
            return state
                .setIn(['test', 'loading'], action.status === FETCH_STATUS.LOADING)
                .setIn(['test', 'data'], action.data);
        case ACTIONS.DUMMY_ACTION.ERROR:
            return state
                .setIn(['test', 'loading'], action.status === FETCH_STATUS.LOADING)
                .setIn(['test', 'data'], action.error);
        default:
            return state;
    }
};

export default testReducer;
