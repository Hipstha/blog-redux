import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getPostsAction } from '../../redux/actions/PostActions';

import CategorySelector from '../../components/category-selector/CategorySelector';
import Post from '../../components/post/Post';
import ModalPost from '../../components/modal-post/ModalPost';
import Loading from '../../components/loading/Loading';
import ServerError from '../../components/server-error/ServerError';

import './Posts.scss';

const Posts = () => {

  const dispatch = useDispatch();
  useEffect( () => {
    // get api
    const getPosts = () => {
      dispatch( getPostsAction() )
    }
    getPosts();
  }, []);

  // get state
  const posts = useSelector(state => state.posts.posts);
  const error = useSelector(state => state.posts.error);
  const loading = useSelector(state => state.posts.loading);

  if (error) {
    return (
      <>
        <ServerError />
      </>
    )
  } else {
    return (
      <>
        <CategorySelector />
        <ModalPost />
        {
          loading ? <Loading /> : null
        }
        <section className="posts-container">
          {
            posts.length === 0 ? 'No posts :(' : (
              posts.map( post => (
                <div key={post.id} className="post">
                  <Post postData={post} />
                </div>
              ))
            )
          }
        </section>
      </>
    )
  }

}

export default Posts;