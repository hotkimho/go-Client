import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Cookies, useCookies, get } from 'react-cookie';
import { Button, Form } from 'react-bootstrap';

const RegisterContainer = styled.div`
  display: flex;
  margin: auto;
  position: absolute;
  top: 30%;
  left: 40%;
`;

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const onIdChange = (e) => {
    setId(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("start login");
    try {
      const result = await axios.post('https://api.hotkimho.com/auth/login', {
        username: id,
        password: password,
      }, {
        withCredentials: true
      });
     localStorage.setItem("sessionId", result.data.SessionId);
     localStorage.setItem("user", result.data.UserId);
     console.log(result);
     //document.location.replace('/');
    } catch (error) {
      alert('아이디 또는 비밀번호가 틀립니다. 다시 입력해주세요');
    }
  };

  return (
    <RegisterContainer>
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3' controlId='formBasicUsername'>
          <Form.Label>아이디</Form.Label>
          <Form.Control onChange={onIdChange} placeholder='Enter username' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicLoginPassword'>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type='password' onChange={onPasswordChange} placeholder='Password' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          로그인
        </Button>
      </Form>
    </RegisterContainer>
  );
};

export default Login;
