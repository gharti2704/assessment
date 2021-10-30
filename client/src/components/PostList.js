import React, { useState } from 'react';
import EditForm from './EditFrom';
import './PostList.css';

const PostList = (props) => {
  const [post, setPost] = useState('');
  const handleClick = (post) => {
    setPost(post);
  };

  return (
    <div>
      {post && <EditForm post={post} />}
      <div
        class="card"
        onClick={() => {
          handleClick(props.post);
        }}
      >
        <div class="container">
          <h4>
            <b>{props.post.title}</b>
          </h4>
          <p>{props.post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostList;
