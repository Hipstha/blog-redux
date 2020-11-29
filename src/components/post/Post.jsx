import React from 'react';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

import './Post.scss';

const Post = () => {
  const id = 1;
  return (
    <>
      <Link to={`/post/${id}`}>
        <article className="post-container">

          <div className="post-image">
            <img src="https://source.unsplash.com/random" alt="postImage"/>
          </div>

          <div className="post-body">
            <div className="post-title">
              <h2>Título del post</h2>
            </div>

            <div className="onHover-animation"></div>

            <div className="post-comments-home">
              <p>
                <span>3 </span>
                <span>Comments </span>
                <span className="material-icons">forum</span>
              </p>
            </div>

            <div className="post-description">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Ab iste id deserunt quod cum eligendi 
                reprehenderit omnis doloribus error ad laudantium provident illo quasi, 
                molestiae ea quibusdam quos quam consequatur!
              </p>
            </div>

            <div className="post-footer">
              <div className="post-category">
                <p>Travel</p>
              </div>

              <div className="post-option">
                <p className="pruebaClick">
                  <span className="material-icons">edit</span>
                </p>
                <p>
                  <span className="material-icons">delete</span>
                </p>
              </div>

            </div>

          </div>
        </article>
      </Link>
    </>
  )
}

export default Post;