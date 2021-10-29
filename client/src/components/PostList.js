import React from 'react';

const PostList = (props) => {
  return (
    <div className="card">
      <div>{props.post.uiserId}</div>
      <div>{props.post.id}</div>
      <div>{props.post.title}</div>
      <div>{props.post.body}</div>
    </div>
  );
};

export default PostList;
