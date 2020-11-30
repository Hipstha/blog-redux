import React from 'react';

import './CommentBox.scss';

const CommentBox = (props) => {
  const { user, comment } = props.commentData;
  return (
    <div className="comment-box">
      <div className="comment">
        <div className="user-img">
          <p>
            <span className="material-icons">person_pin</span>
          </p>
        </div>
        <div className="comment-body">
          <div className="comment-user">
            <h3>{ user }</h3>
          </div>
          <div className="comment-text">
            <p>
              {
                comment
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentBox;