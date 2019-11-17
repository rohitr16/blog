import ActionTypes from '../actions/ActionTypes';

const initialState = {
    userList: [],
    userData: {}
}

export default function(state = initialState, action) {
    const {payload} = action;
    let newState = {};
    switch (action.type) {
        case ActionTypes.FETCH_USERS_DATA_SUCCESS:
            newState =  {...state, userList: payload};
            break;
        case ActionTypes.FETCH_USER_DATA_SUCCESS:
            newState = {...state, userData: payload};
            break;
        default:
            newState = state;
    }
    return newState;
}