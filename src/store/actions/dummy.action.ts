import { ACTIONS } from './reduxActions';
import { FETCH_STATUS } from '../../assets/constants';
import { Generic } from '../../assets/types';

export const dummyAction = {
    pending: {
        type: ACTIONS.DUMMY_ACTION.PENDING,
        status: FETCH_STATUS.LOADING,
    },
    success: (data: Generic) => ({
        type: ACTIONS.DUMMY_ACTION.SUCCESS,
        status: FETCH_STATUS.SUCCESS,
        data,
    }),
    error: (error: Generic) => ({
        type: ACTIONS.DUMMY_ACTION.ERROR,
        status: FETCH_STATUS.ERROR,
        error,
    }),
};

export const dummyActionBegin = () => ({
    type: ACTIONS.DUMMY_ACTION_BEGIN,
});
