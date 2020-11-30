import React from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { deletePostAction, updatePostActionModal } from '../../redux/actions/PostActions';

import './Post.scss';

const Post = (props) => {

  const dispatch = useDispatch();

  const { id, title, summary, img, category, comments } = props.postData;
  const summaryShort = summary.substring(0, 150) + '...';

  const deletPost = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch( deletePostAction(id) );
  }

  const updatePost = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch( updatePostActionModal(props.postData) )
  }

  return (
    <>
      <Link to={`/post/${ id }`}>
        <article className="post-container animate__animated animate__fadeIn">

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
                  <span onClick={updatePost} className="material-icons">edit</span>
                </p>
                <p>
                  <span onClick={deletPost} className="material-icons">delete</span>
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