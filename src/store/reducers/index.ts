import {combineReducers} from 'redux';
import dummyReducer from './dummy.reducer';

const rootReducer = combineReducers({
    dummy: dummyReducer,
});

export default rootReducer;
