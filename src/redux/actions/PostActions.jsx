import {
  START_INITIAL_GET_POST,
  INITIAL_GET_POST_SUCCESS,
  INITIAL_GET_POST_ERROR,
  START_GET_A_POST,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
  SET_COMMENT_IN_POST,
  COMMENT_IN_POST_SUCCESS,
  COMMENT_IN_POST_ERROR,
  SET_NEW_POST,
  SET_NEW_POST_SUCCESS,
  SET_NEW_POST_ERROR,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  UPDATE_POST_MODAL,
  UPDATE_POST_SUCCESS_MODAL,
  UPDATE_POST_ERROR_MODAL,
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
  HIDE_MODAL_UPDATE
} from '../types';

import Swal from 'sweetalert2';
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

// function to create a new post
export function createNewPost(newPost) {
  return async (dispatch) => {
    dispatch( addPost() );
    try {
      const posted = await axiosClient.post('/posts', newPost);
      dispatch( addPostSuccess(posted.data) );
      Swal.fire('success', 'This post has been created', 'success');
    } catch(error) {
      dispatch( addPostError() );
    }
  }
}

const addPost = () => ({
  type: SET_NEW_POST,
  payload: true
});

const addPostSuccess = (newPost) => ({
  type: SET_NEW_POST_SUCCESS,
  payload: newPost
});

const addPostError = () => ({
  type: SET_NEW_POST_ERROR,
  payload: true
});

// function to delete a post
export function deletePostAction(id) {
  return (dispatch) => {
    dispatch( deletePost(id) );
    try {
      Swal.fire({
        title: "Are you sure you want to delete this post?",
        showCancelButton: true,
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Sucessfully deleted",
            "This post has been deleted",
            "success"
          );
          axiosClient.delete(`/posts/${id}`);
          dispatch( deletePostSuccess() );
        }
      });
      
    } catch(error) {
      console.log(error);
      dispatch( deletePostError() );
    }
  };
};

const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id
});

const deletePostSuccess = () => ({
  type: DELETE_POST_SUCCESS
});

const deletePostError = () => ({
  type: DELETE_POST_ERROR,
  payload: true
});

// functions to send data to a modal for update a post
export function updatePostActionModal(newPost) {
  return (dispatch) => {
    dispatch( updatePostModal() );
    try {
      dispatch( updatePostSuccessModal(newPost) )
    } catch(error) {
      dispatch( updatePostErrorModal() )
    }
  }
}

const updatePostModal = () => ({
  type: UPDATE_POST_MODAL,
  payload: true
});

const updatePostSuccessModal = (newPost) => ({
  type: UPDATE_POST_SUCCESS_MODAL,
  payload: newPost
});

const updatePostErrorModal = () => ({
  type: UPDATE_POST_ERROR_MODAL,
  payload: true
});

// hide update modal
export function hideModalAction() {
  return (dispatch) => {
    dispatch({
      type: HIDE_MODAL_UPDATE,
      payload: false
    });
  }
}


// functions to update a post
export function updatePostAction(newPost) {
  return async (dispatch) => {
    dispatch( updatePost() );
    try {
      await axiosClient.put(`/posts/${ newPost.id }`, newPost);
      dispatch( updatePostSuccess(newPost) );
      Swal.fire('success', 'This post has been updated', 'success');
    } catch(error) {
      dispatch( updatePostError() )
    }
  }
}

const updatePost = () => ({
  type: UPDATE_POST,
  payload: true
});

const updatePostSuccess = (newPost) => ({
  type: UPDATE_POST_SUCCESS,
  payload: newPost
});

const updatePostError = () => ({
  type: UPDATE_POST_ERROR,
  payload: true
});