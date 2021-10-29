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

  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.body}</Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>;
};

export default PostList;
