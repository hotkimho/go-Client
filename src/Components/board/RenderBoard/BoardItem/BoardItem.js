import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TablePost = styled.tr`
  text-align: center;
  line-height: 2em;
`;

const BoardItem = ({ post }) => {
  const { id, title, writer, created_at, view} = post;
  

  const onTitleClick = (e) => {
    document.location.replace(`/board/${id}/post`);
  };
  return (
    <TablePost>
      <td>{id}</td>
      {/*<Link to={`/board/${id}/post`}>*/}
      <td
        style={{
          cursor: 'pointer',
        }}
        onClick={onTitleClick}
      >
        {title}
      </td>
      {/*</Link>*/}
      <td>{writer}</td>
      <td>{created_at}</td>
      <td>{view}</td>
    </TablePost>
  );
};

export default BoardItem;