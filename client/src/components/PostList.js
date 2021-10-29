import React from 'react';
import { Card } from 'react-bootstrap';

const PostList = (props) => {
  // return (
  //   <div className="card">
  //     <div>{props.post.uiserId}</div>
  //     <div>{props.post.id}</div>
  //     <div>{props.post.title}</div>
  //     <div>{props.post.body}</div>
  //   </div>
  // );

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Text>{props.post.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostList;
