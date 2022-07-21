import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import CommentItem from './CommentItem/CommentItem';
import { Button, Form, InputGroup } from 'react-bootstrap';

const Comment = ({comments, postId}) => {
	const [content, setContent] = useState('');
	let isLogin = false;
	let commentPlaceholder;

	if (localStorage.getItem("user") === null) {
		isLogin = false;
   	 	commentPlaceholder = "로그인이 되어 있지 않습니다.";
	}
 	else {
		isLogin = true;
		commentPlaceholder = "댓글을 입력해주세요.";
  	}

	const onContentChange = (e) => {
		setContent(e.target.value);
	}
	const onButtonClick = async() => {
		try {
		const result = await axios.post('http://localhost:8000/board/post/comment', {
			postId,
			content,
		});
		setContent(() => "");
		if (comments === null){
			document.location.replace(`/board/${postId}/post`);
		}
		
		} catch(error) {
			alert('댓글 쓰기가 실패했습니다.');
			console.log('comment', error);
		}
	}

	return (
		<div>
		<Accordion defaultActiveKey="0">
		{comments && comments.map((comment) => (
			<CommentItem comment={comment}/>
		))}
		</Accordion>
		<h6 style={{marginTop: '20px'}}>댓글 달기</h6>
		<InputGroup className="mb-3">
        <Form.Control
          placeholder={commentPlaceholder}
		  onChange={onContentChange}
		  value={content}
        />
        <Button
		variant="outline-secondary"
		id="button-addon2"
		onClick={onButtonClick}
		>
          글쓰기
        </Button>
        </InputGroup>
		</div>
	)
}

export default Comment;