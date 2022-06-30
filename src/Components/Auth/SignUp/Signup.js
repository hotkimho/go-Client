import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Button, Form} from 'react-bootstrap';

const RegisterContainer = styled.div`
  display: flex;
  margin: auto;
  position: absolute;
  top: 30%;
  left: 40%;
`;

const RegisterForm = styled.form`
  display: inline-block;
  position: absolute;
  left: 40%;
  text-align: left;
`;

const RegisterDiv = styled.div`
  font-size: 20px;
  margin-top: 30px;
`;
const RegisterLabel = styled.label``;

const RegisterInput = styled.input`
  margin-left: 5px;
`;

const RegisterSubmit = styled.input``;

const SignUp = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const onIdChange = (e) => {
    setId(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onCheckPasswordChange = (e) => {
    setCheckPassword(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!(password === checkPassword)) {
      alert('비밀번호를 똑같이 입력해주세요');
      return;
    }
    try {
      const result = await axios.post('http://localhost:8000/auth/signup', {
        username: id,
        password: password,
      });
      alert('회원가입이 완료 되었습니다.');
      document.location.replace('/');
    } catch (error) {
      if (error.response.status === 409) {
        alert('중복된 아이디 입니다. 아이디를 변경해주세요');
      }
    }
  };
  return (
      <RegisterContainer>
        <Form onSubmit={onSubmit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>아이디</Form.Label>
            <Form.Control onChange={onIdChange} placeholder='Enter username'/>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type='password' onChange={onPasswordChange} placeholder='Password'/>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicCheckPassword'>
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control type='password' onChange={onCheckPasswordChange} placeholder='Password'/>
          </Form.Group>

          <Button variant='primary' type='submit'>
            회원가입
          </Button>
        </Form>
      </RegisterContainer>
  );
};

export default SignUp;
