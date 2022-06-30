import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TablePost = styled.tr`
  text-align: center;
  line-height: 2em;
`;

const BoardItem = ({ post }) => {
  const { id, title, writer, created_at } = post;
  const date = new Date(created_at);
  const yaer = date.getFullYear();
  const month = +date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMonth();
  const parsingDate = yaer + '.' + month + '.' + day + ' ' + hour + ':' + minute;

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
      <td>{parsingDate}</td>
    </TablePost>
  );
};

export default BoardItem;