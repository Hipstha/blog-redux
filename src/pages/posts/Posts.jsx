import React from 'react';

import CategorySelector from '../../components/category-selector/CategorySelector';
import Post from '../../components/post/Post';
import ModalPost from '../../components/modal-post/ModalPost';

import './Posts.scss';

const Posts = () => {
  return (
    <>
      <CategorySelector />
      <ModalPost />

      <section className="posts-container">
        <div className="post">
          <Post />
        </div>
        <div className="post">
          <Post />
        </div>
        <div className="post">
          <Post />
        </div>
        <div className="post">
          <Post />
        </div>
      </section>
    </>
  )
}

export default Posts;