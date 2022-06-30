import React, { useState } from 'react';
import './post.scss';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostContainer = styled.div`
  width: 500px;
  margin: auto;
  position: absolute;
  top: 20%;
  left: 20%;
`;

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const params = useParams();
  const id = params.id;
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmut = async (e) => {
    e.preventDefault();
    const cookies = new Cookies();
    const token = cookies.get('accessToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    try {
      const result = await axios.patch(`http://localhost:8000/board/post?postId=${id}`, {
        title,
        content,
      });
      alert('게시글이 수정되었습니다');
      document.location.replace('/board');
    } catch (error) {
      alert('인가된 사용자가 아닙니다. (프론트엔드 영역에서 다른 사용자의 글 수정 페이지 접근을 막아야 함)');
      document.location.replace('/board');
      console.log(error);
    }
  };

  useState(() => {
    const fetchData = async () => {
      const cookies = new Cookies();
      const token = cookies.get('accessToken');
      try {
        const result = await axios.get(`http://localhost:8000/board/${id}/post`);
        setTitle(() => result.data.title);
        setContent(() => result.data.content);
      } catch (error) {
        alert('게시글을 불러오는데 실패 했습니다.');
        document.location.replace('/board');
      }
    };
    fetchData();
  });

  return (
    <PostContainer>
      <Form onSubmit={onSubmut}>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <h4>제목</h4>
          <Form.Control
            onChange={onTitleChange}
            value={title}
            as='textarea'
            rows={1}
            placeholder='Enter Title'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicContent'>
          <h4>내용</h4>
          <Form.Control
            o
            onChange={onContentChange}
            value={content}
            as='textarea'
            rows={5}
            placeholder='Enter Content'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          수정
        </Button>
      </Form>
    </PostContainer>
  );
};

export default EditPost;
