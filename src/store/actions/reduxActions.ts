/* Action declarations */

const asyncActionType = (type: any) => ({
    PENDING: `${type} - Pending`,
    SUCCESS: `${type} - Success`,
    ERROR: `${type} - Error`,
});

export const ACTIONS = {
    DUMMY_ACTION_BEGIN: '[DUMMY] - ACTION_BEGIN',
    DUMMY_ACTION: asyncActionType('[DUMMY] - ACTION'),
};
