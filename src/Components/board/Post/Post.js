import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import qs from 'qs';
import { useParams } from 'react-router-dom';
import queryString from 'query-string';

const PostContainer = styled.div`
  width: 500px;
  margin: auto;
  position: absolute;
  top: 20%;
  left: 20%;
`;

const Post = () => {
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    const fetchData = async () => {
      try {

        const post = await axios.get(`https://api.hotkimho.com/board/post?postId=${id}`);
        setTitle(() => post.data.title);
        setWriter(() => post.data.writer);
        setContent(() => post.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });
  const onEditClick = (e) => {
    console.log(e);
    document.location.replace(`/board/edit/${id}/post`);
  };
  const onRemoveClick = async (e) => {
    try {
      console.log(id);
      await axios.delete(`https://api.hotkimho.com/board/post?postId=${id}`);
      alert('게시글이 삭제되었습니다');
      document.location.replace('/board');
    } catch (error) {
      console.log(error)
      alert('인가된 사용자가 아닙니다. (프론트엔드 영역에서 다른 사용자의 글 수정 페이지 접근(버튼이 안보이게)을 막아야 함)');
      document.location.replace('/board');
    }
  };
  return (
    <PostContainer>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <h4>제목</h4>
          <div>{title}</div>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicContent'>
          <h4>작성자</h4>
          <div>{writer}</div>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicContent'>
          <h4>제목</h4>
          <div>{content}</div>
        </Form.Group>
      </Form>
      <Button
        style={{
          marginRight: '20px',
        }}
        onClick={onEditClick}
      >
        수정
      </Button>
      <Button onClick={onRemoveClick}>삭제</Button>
    </PostContainer>
  );
};

export default Post;
