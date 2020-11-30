import {
  START_INITIAL_GET_POST,
  INITIAL_GET_POST_SUCCESS,
  INITIAL_GET_POST_ERROR,
  START_GET_A_POST,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
  SET_COMMENT_IN_POST,
  COMMENT_IN_POST_SUCCESS,
  COMMENT_IN_POST_ERROR
} from '../types';

import axiosClient from '../../config/axios';


// Functions to get all posts
export function getPostsAction() {
  return async (dispatch) => {
    dispatch( getPosts() );
    try {
      const resp = await axiosClient.get('/posts');
      dispatch( getPostsSuccess(resp.data) );
    }
    catch(error) {
      console.log(error); 
      dispatch( getPostsError() );
    }
  };
}

const getPosts = () => ({
  type: START_INITIAL_GET_POST,
  payload: true,
});

const getPostsSuccess = (posts) => ({
  type: INITIAL_GET_POST_SUCCESS,
  payload: posts
});

const getPostsError = () => ({
  type: INITIAL_GET_POST_ERROR,
  payload: true
});

//functions to get a post
export function getPostByIdAction(id) {
  return async (dispatch) => {
    dispatch( getPostById(id) );
    try {
      const resp = await axiosClient.get(`/posts/${ id }`);
      dispatch( getPostByIdSuccess(resp.data) )
    } catch(error) {
      console.log(error);
      dispatch( getPostByIdError() );
    }
  }
}

const getPostById = () => ({
  type: START_GET_A_POST,
  payload: true
});

const getPostByIdSuccess = (post) => ({
  type: GET_POST_SUCCESS,
  payload: post
});

const getPostByIdError = () => ({
  type: GET_POST_ERROR,
  payload: true
});

// function to set a comment
export function setCommentAction(newPost) {
  return async (dispatch) => {
    dispatch( setComment() );
    try {
      console.log(newPost);
      await axiosClient.put(`/posts/${ newPost.id }`, newPost);
      dispatch( setCommentSuccess(newPost) );
    } catch(error) {
      console.log(error);
      dispatch( setCommentError() );
    }
  }
}

const setComment = () => ({
  type: SET_COMMENT_IN_POST,
  payload: true
});

const setCommentSuccess = (newPost) => ({
  type: COMMENT_IN_POST_SUCCESS,
  payload: newPost
});

const setCommentError = () => ({
  type: COMMENT_IN_POST_ERROR, 
  payload: true
});