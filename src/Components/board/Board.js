import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RenderBoard from './RenderBoard/RenderBoard';
import Header from '../Header';
import { Cookies } from 'react-cookie';
import Pagination from 'react-js-pagination';
import './pagination.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BoardContainer = styled.div`
  display: block;
  margin-top: 120px;
  padding-left: 150px;
  padding-right: 200px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  let isLogin;

  if (localStorage.getItem("user") === null) {
    isLogin = false;
  }
  else {
    isLogin = true;
  }

  const onPageChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    const fetchData = async () => {

      const result = await axios.get(`http://hotkimho.com:8000/board?page=${page}`);
      console.log(result.data)
      setPosts(() => result.data);
    };
    fetchData();
  }, [page]);

  return (
    <div>
      <Header />
      <BoardContainer>
        <Title>게시판</Title>
        {/*
        게시판 카테고리
        카테고리 프론음 코드는 있지만 적용은 하지 않음
          <BoardCategory currentType={currentType} onCategoryClick={onCategoryClick}/>
          */}
        <RenderBoard posts={posts} />
        {/*<PostSearch setPosts={setPosts} />*/}
        <Link to='/board/post'>
        {isLogin ?
          (<Button
            style={{
              position: 'relative',
              top: '5px',
              left: '80%',
            }}
          >
            글쓰기
          </Button>
          ) : null}
          {/*<Button
            style={{
              position: 'relative',
              top: '5px',
              left: '80%',
            }}
          >
            글쓰기
          </Button>*/}
        </Link>
        <Pagination
          activePage={page}
          iermsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          prevPageText={'<'}
          nextPageText={'>'}
          onChange={onPageChange}
        />
      </BoardContainer>
    </div>
  );
};

export default Board;
