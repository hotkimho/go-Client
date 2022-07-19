import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import CommentItem from './CommentItem/CommentItem';

const Comment = ({comments}) => {
	const { username, content, create_at} = comments;
	
	return (
		<Accordion defaultActiveKey="0">
		{comments && comments.map((comment) => (
			<CommentItem comment={comment} />
		))}
		</Accordion>
	)
}

export default Comment;