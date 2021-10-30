import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import './EditForm.css';

export default function EditForm({ post }) {
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const posts = useSelector((state) => state.posts.posts);

  const handleClose = () => setShow(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    for (let p of posts) {
      if (p.title === post.title) {
        p.title = title;
        p.body = body;
        console.log(p.title);
      }
    }

    handleClose();
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '3%',
    },
  };

  return (
    <div className="modal">
      <Modal
        isOpen={show}
        onRequestClose={handleClose}
        style={customStyles}
        ariaHideApp={false}
      >
        <h2>Edit this post</h2>
        <form onSubmit={handleUpdate}>
          <div>
            <div>Edit Title</div>
            <input
              className="title"
              type="text"
              placeholder={post.title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <div>Edit Content</div>
            <textarea
              className="body"
              placeholder={post.body}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button type="submit" className="button">
            Update
          </button>
          <button className="button" onClick={handleClose}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
}
