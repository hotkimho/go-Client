import React from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem/BoardItem';

const TableContainer = styled.table`
  margin-top: 30px;
  width: 100%;
`;

const TableHeader = styled.th`
  text-align: center;
  font-weight: bold;
  line-height: 1.75em;
`;

const TableHeaderTitle = styled.th`
  text-align: center;
  font-weight: bold;
  min-width: 100px;
  line-height: 1.75em;
`;

const TableBody = styled.tbody``;

const RenderBoard = ({ posts }) => {
  return (
    <TableContainer>
      {/* 게시글 헤더 */}
      <thead>
        <TableHeader scope='col'>번호</TableHeader>
        <TableHeaderTitle scope='col'>제목</TableHeaderTitle>
        <TableHeader scope='col'>글쓴이</TableHeader>
        <TableHeader scope='col'>날짜</TableHeader>
      </thead>

      {/* 게시글 내용 */}
      <TableBody>
        {posts.map((post) => (
          <BoardItem post={post} />
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default RenderBoard;