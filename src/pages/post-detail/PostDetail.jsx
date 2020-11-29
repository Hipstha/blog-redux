import React from 'react';
import { useParams } from 'react';
import { Link } from 'react-router-dom';

import CommentBox from '../../components/comment-box/CommentBox';

import './PostDetail.scss';

const PostDetail = () => {

  const img = "https://source.unsplash.com/random";

  const backImg = {
    backgroundImage: `url('${img}')`,
  };

  return (
    <section>

      <article className="post-header hola" style={backImg}>
        <div className="post-header-container">
          <div className="return-options">
            <Link to="/posts">
              <span className="material-icons">arrow_back_ios</span> View Posts
            </Link>
          </div>

          <div className="post-header-title">
            <h2>Título del post</h2>
          </div>
        </div>
      </article>

      <article className="post-summary">
        <div className="post-summary-container">
          <div className="summary">
            <p>
                orem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem unde tempore distinctio laudantium dolor quae numquam dignissimos nulla temporibus cupiditate, 
                atque error quo sapiente quos totam voluptatem voluptatum, eaque et?
              </p>
          </div>
        </div>
      </article>

      <article className="post-comments">

        <div className="post-comments-title">
          <h3>Comments</h3>
        </div>

        <div className="ccomments-section">
          <div className="this-comment-box">
            <CommentBox />
          </div>
        </div>

        <div className="comment-form">
          <form>
            <div className="form-col">
              <textarea name="comment" id="comment-inpu" rows="0"></textarea>
            </div>
            <div className="form-col">
              <button type="button" className="submit-button">Add</button>
            </div>
          </form>
        </div>

      </article>

      
    </section>
  )
}

export default PostDetail;