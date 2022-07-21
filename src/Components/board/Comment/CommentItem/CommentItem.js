import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';


const CommentItem = ({comment}) => {
	const { username, content, created_at} = comment;
	return (
      <Card>
        <Card.Header>
			<div>
        <span  style={{float: 'left'}}>
        {username}
        </span>
        <span  style={{float: 'right'}}>
        {created_at}
        </span>
      </div>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{content}</Card.Body>
        </Accordion.Collapse>
      </Card>

	)
}

export default CommentItem;