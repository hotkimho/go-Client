import React, { useState } from 'react';
import './post.scss';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { Cookies } from 'react-cookie';
import axios from 'axios';

const PostContainer = styled.div`
  width: 500px;
  margin: auto;
  position: absolute;
  top: 20%;
  left: 20%;
`;

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmut = async (e) => {
    e.preventDefault();
    let message;
    const cookies = new Cookies();
    const token = cookies.get('accessToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    try {
      const result = await axios.post('http://localhost:8000/board/post', {
        title,
        content,
      });
      document.location.replace('/board');
    } catch (error) {
      alert('글쓰기 실패');
      console.log(error);
    }
  };
  return (
    <PostContainer>
      <Form onSubmit={onSubmut}>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <h4>제목</h4>
          <Form.Control onChange={onTitleChange} as='textarea' rows={1} placeholder='Enter Title' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicContent'>
          <h4>내용</h4>
          <Form.Control o onChange={onContentChange} as='textarea' rows={5} placeholder='Enter Content' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          글쓰기
        </Button>
      </Form>
    </PostContainer>
  );
};

export default CreatePost;
