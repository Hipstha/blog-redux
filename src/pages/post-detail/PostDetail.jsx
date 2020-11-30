import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { getPostByIdAction, setCommentAction } from '../../redux/actions/PostActions';

import CommentBox from '../../components/comment-box/CommentBox';
import Loading from '../../components/loading/Loading';
import ServerError from '../../components/server-error/ServerError';

import './PostDetail.scss';

const PostDetail = () => {

  const { postId } = useParams();

  // getting post by id from api
  const dispatch = useDispatch();
  useEffect( () => {
    const getPostById = (id) => {
      dispatch( getPostByIdAction(id) )
    }
    getPostById(postId);
  }, []);

  // loading important data
  const post = useSelector(state => state.posts.postDetail);
  const error = useSelector(state => state.posts.error);
  const loading = useSelector(state => state.posts.loading);
  const { title, summary, img, comments } = post;
  const backImg = {
    backgroundImage: `url('${img}')`,
  };

  // comment form
  const [user, setUser] = useState('Joe Doew');
  const [comment, setComment] = useState('');
  const submitedForm = e => {
    e.preventDefault();
    comments.push({user, comment});
    dispatch(setCommentAction(post));
    setComment('');
    document.getElementById('comment-input').value = "";
  };

  if(error) {
    return (
      <ServerError />
    )
  } else {
    return (
      <section className="postDetail">
  
        {
          loading ? <Loading /> : null
        }

        <article className="post-header animate__animated animate__fadeIn" style={backImg}>
          <div className="post-header-container">
            <div className="return-options">
              <Link to="/posts">
                <span className="material-icons">arrow_back_ios</span> View Posts
              </Link>
            </div>
  
            <div className="post-header-title">
              <h2>{ title }</h2>
            </div>
          </div>
        </article>
  
        <article className="post-summary">
          <div className="post-summary-container">
            <div className="summary">
              <p>
                  {summary }
                </p>
            </div>
          </div>
        </article>
  
        <article className="post-comments">
  
          <div className="post-comments-title">
            <h3>Comments</h3>
          </div>
  
          <div className="ccomments-section">
              {
                comments.map((comment, idx) => (      
                  <div key={idx} className="this-comment-box">
                    <CommentBox commentData={comment} />
                  </div>
                ))
              }
          </div>
  
          <div className="comment-form">
            <form onSubmit={submitedForm} >
              <div className="form-col">
                <textarea name="comment" 
                          id="comment-input" 
                          rows="0"
                          placeholder="send a comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value) }
                ></textarea>
              </div>
              <div className="form-col">
                <button type="submit" className="submit-button">Add</button>
              </div>
            </form>
          </div>
  
        </article>

      </section>
    )
  }


}

export default PostDetail;