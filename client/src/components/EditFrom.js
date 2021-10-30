import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function EditFrom({ post }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitHandler = () => {};

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            placeholder={post.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="body">
          <Form.Label>Body</Form.Label>
          <Form.Control
            type="body"
            placeholder={post.body}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Update
        </Button>
      </Form>
    </div>
  );
}
