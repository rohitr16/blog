import ActionTypes from '../actions/ActionTypes';

const initialState = {
    userPosts: [],
    postDetails: {},
    postComments: []
}

export default function(state = initialState, action = {}) {
    const payload = action.payload;
    switch (action.type) {
        case ActionTypes.FETCH_POSTS_SUCCESS:
            return {...state, userPosts: [...state.userPosts, ...payload]};
        case ActionTypes.FETCH_POST_DETAILS_SUCCESS:
            return {...state, postDetails: payload};
        case ActionTypes.FETCH_POST_COMMENTS_SUCCESS:
            return {...state, postComments: payload};
        default:
            return state;
    }
};
