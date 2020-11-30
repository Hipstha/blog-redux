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
  postEliminar: null,
  postModificar: null
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
    default: 
      return state;
  }
};