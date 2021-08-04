import React from 'react';
import './Post.css';

const Post = (props) => {


  return (
    <div className="post">
      <img className="post_img" src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg" alt=""></img>
      <div className="post_title">
        <h2>{props.title}</h2>
      </div>
      <div>
        <p>{props.body}</p>
      </div>
      <div>
        {props.username}
      </div>
      <div>
        <span>Posted about: <em>1 hour ago</em></span>
      </div>
    </div>
  )
}

export default Post;