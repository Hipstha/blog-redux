import React from 'react';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

import './Post.scss';

const Post = (props) => {
  const { id, title, summary, img, category, comments } = props.postData;
  const summaryShort = summary.substring(0, 150) + '...';

  return (
    <>
      <Link to={`/post/${ id }`}>
        <article className="post-container">

          <div className="post-image">
            <img src={ img } alt="postImage"/>
          </div>

          <div className="post-body">
            <div className="post-title">
              <h2>{ title }</h2>
            </div>

            <div className="onHover-animation"></div>

            <div className="post-comments-home">
              <p>
                <span>{ comments.length } </span>
                <span>Comments </span>
                <span className="material-icons">forum</span>
              </p>
            </div>

            <div className="post-description">
              <p>
                { summaryShort }
              </p>
            </div>

            <div className="post-footer">
              <div className="post-category">
                <p>{ category }</p>
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