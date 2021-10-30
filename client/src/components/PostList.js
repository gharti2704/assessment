import React from 'react';
import { Container, Card } from 'react-bootstrap';

const PostList = (props) => {
  console.log(typeof props.edit);
  const handleClick = (post) => {
    // props.edit(post);
  };

  return (
    <Container>
      <Card border="secondary" style={{ width: '35rem' }}>
        <Card.Body
          onClick={() => {
            handleClick(props.post);
          }}
        >
          <Card.Title text="dark">{props.post.title}</Card.Title>
          <Card.Text>{props.post.body}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PostList;
