import axios from 'axios';
import ActionTypes from './ActionTypes';
import {hostUrl} from '../config';


export const getUsersData = () => async dispatch => {

    const res = await axios.get(`${hostUrl}/users`);
    dispatch({ type: ActionTypes.FETCH_USERS_DATA_SUCCESS, payload: res.data });
};

export const getUserData = (userId) => async dispatch => {

    const res = await axios.get(`${hostUrl}/users/${userId}`);
    dispatch({ type: ActionTypes.FETCH_USER_DATA_SUCCESS, payload: res.data });
};

export const getPosts = (userId, skip = 0, limit = 10) => async dispatch => {
    const params = {
        userId,
        skip,
        limit
    };
    const res = await axios.get(`${hostUrl}/posts`, {params});
    dispatch({ type: ActionTypes.FETCH_POSTS_SUCCESS, payload: res.data });
};

export const getPostDetails = (postId) => async dispatch => {

    const res = await axios.get(`${hostUrl}/posts/${postId}`);
    dispatch({ type: ActionTypes.FETCH_POST_DETAILS_SUCCESS, payload: res.data });
};

export const getUserComments = (userId) => async dispatch => {

    const res = await axios.get(`${hostUrl}/posts/${userId}/comments`);
    dispatch({ type: ActionTypes.FETCH_USER_COMMENTS_SUCCESS, payload: {userComments: res.data} });
};

export const getPostComments = (postId) => async dispatch => {
    const params = {
        postId
    };

    const res = await axios.get(`${hostUrl}/comments`, {params});
    dispatch({ type: ActionTypes.FETCH_POST_COMMENTS_SUCCESS, payload: res.data });
};

export const deletePost = (postId, userId, history) => async dispatch => {

    await axios.delete(`${hostUrl}/posts/${postId}`); 
    history.push(`/posts/${userId}`);
};
