import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

const CommentItem = ({comment}) => {
	const { username, content, create_at} = comment;
	return (
      <Card>
        <Card.Header>
			{username}
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
	)
}

export default CommentItem;