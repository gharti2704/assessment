import React from 'react';
import { Card } from 'react-bootstrap';

const PostList = (props) => {
  const handleClick = (post) => {
    console.log(post);
  };

  return (
    <div>
      <Card border="secondary" style={{ width: '35rem' }}>
        <Card.Body
          onClick={() => {
            handleClick(props.post);
          }}
        >
          <Card.Title>{props.post.title}</Card.Title>
          <Card.Text>{props.post.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostList;
