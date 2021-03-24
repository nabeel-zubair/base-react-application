import { List, Map } from 'immutable';
import createSelector from './reselect';

const getDummyRoot = (state: any) => {
    const { dummy } = state;
    return dummy || Map();
};

export const getDummyData = createSelector(getDummyRoot, (state) => {
    return state.getIn(['test', 'data']) || List();
});
