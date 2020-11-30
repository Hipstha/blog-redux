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

const postDetailEmpty = {
  id: 0,
  title: '',
  summary: '',
  category: '',
  img: '',
  comments: []
}

// state del reducer
const initialState = {
  posts: [],
  postDetail: postDetailEmpty,
  error: false,
  loading: false,
  postDelete: null,
  postUpdate: null,
  isPostToUpdate: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case START_GET_A_POST:
    case START_INITIAL_GET_POST:
      return {
        ...state,
        loading: action.payload
      };
    case INITIAL_GET_POST_SUCCESS: 
      return {
        ...state,
        loading: false,
        error: false,
        posts: action.payload,
        postDetail: postDetailEmpty
      };
    case SET_NEW_POST_ERROR:
    case COMMENT_IN_POST_ERROR:
    case GET_POST_ERROR:
    case INITIAL_GET_POST_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case GET_POST_SUCCESS: 
      return {
        ...state,
        loading: false,
        error: false,
        postDetail: action.payload
      }
    case SET_COMMENT_IN_POST:
      return {
        ...state, 
        loading: false,
      }
    case COMMENT_IN_POST_SUCCESS: 
      return {
        ...state,
        loading: false,
        error: false,
        postDetail: action.payload,
        posts: state.posts.map(
          post => {
            return post.id === action.payload.id ? post = action.payload : post
          }
        )
      }
    case SET_NEW_POST: 
      return {
        ...state,
        loading: false,
        error: false
      }
    case SET_NEW_POST_SUCCESS: 
      return {
        ...state,
        loading: false,
        error: false,
        posts: [ ...state.posts, action.payload ]
      }
    case DELETE_POST: 
      return {
        ...state,
        loading: false,
        error: false,
        postDelete: action.payload
      }
    case DELETE_POST_SUCCESS: 
      return {
        ...state,
        loading: false,
        error: false,
        posts: state.posts.filter( post => post.id !== state.postEliminar),
        postDelete: null
      }
    case DELETE_POST_ERROR: 
      return {
        ...state, 
        loading: false,
        error: action.payload
      }
    case UPDATE_POST_MODAL: 
      return {
        ...state,
        loading: action.payload,
        isPostToUpdate: action.payload
      }
    case UPDATE_POST_SUCCESS_MODAL: 
      return {
        ...state,
        loading: false,
        error: false,
        postUpdate: action.payload
      } 
    case UPDATE_POST_ERROR_MODAL: 
      return {
        ...state,
        loading: false,
        error: true
      }
    case HIDE_MODAL_UPDATE:
      return {
        ...state,
        loading: false,
        isPostToUpdate: false,
        postUpdate: null
      }
    case UPDATE_POST:
      return {
        ...state,
        loading: false,
        error: false,
      }
    case UPDATE_POST_SUCCESS: 
      return {
        ...state,
        loading: false,
        error: false,
        isPostToUpdate: false,
        posts: state.posts.map( post => {
          return post.id === action.payload.id ? post = action.payload : post
        }),
        postUpdate: false
      }
    case UPDATE_POST_ERROR: 
      return {
        ...state,
        error: action.payload
      }
    default: 
      return state;
  }
};
