import { createSelectorCreator, defaultMemoize } from 'reselect';
import { is } from 'immutable';

function isEqual(a: any, b: any) {
    return is(a, b);
}

const createImmutableSelector = createSelectorCreator(defaultMemoize, isEqual);

export default createImmutableSelector;
