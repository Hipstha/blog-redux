import React from 'react';

import './CommentBox.scss';

const CommentBox = () => {
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
            <h3>Alejandro</h3>
          </div>
          <div className="comment-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima aliquam officiis 
              voluptatem facilis fugit fugiat, nobis beatae distinctio, 
              numquam nesciunt consequatur ab iusto soluta optio esse consequuntur corrupti ut tenetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentBox;