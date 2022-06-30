import { Link, Route } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const Header = () => {
  const isLogin = new Cookies().get('accessToken');

  return (
    <header>
      <div className='px-3 py-2 bg-dark text-white'>
        <div className='container'>
          <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
            <a
              href='/'
              className='d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none'
            >
              <svg className='bi me-2' width='40' height='32' role='img' aria-label='Bootstrap'>
                <use xlinkHref='#bootstrap' />
              </svg>
            </a>

            <ul className='nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small'>
              <li>
                <a href='/' className='nav-link text-secondary'>
                  <svg className='bi d-block mx-auto mb-1' width='24' height='24'>
                    <use xlinkHref='#home' />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href='/board' className='nav-link text-secondary'>
                  <svg className='bi d-block mx-auto mb-1' width='24' height='24'>
                    <use xlinkHref='#board' />
                  </svg>
                  게시판
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='px-3 py-2 border-bottom mb-3'>
        <div className='container d-flex flex-wrap justify-content-center'>
          <form className='col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto'>
            <input type='search' className='form-control' placeholder='Search...' aria-label='Search' />
          </form>
          <div className='text-end'>
            {isLogin ? (
              <Link to='/logout'>
                <button type='button' className='btn btn-light text-dark me-2'>
                  Logout
                </button>
              </Link>
            ) : (
              <div>
                <Link to='/login'>
                  <button type='button' className='btn btn-light text-dark me-2'>
                    Login
                  </button>
                </Link>
                <Link to='/signup'>
                  <button type='button' className='btn btn-primary'>
                    Sign-up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
