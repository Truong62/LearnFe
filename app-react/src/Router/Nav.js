// Nav.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const listRouter = [
  {
    id: 1,
    link: '/',
    tag: 'Home'
  },
  {
    id: 2,
    link: '/pr',
    tag: 'Product'
  },
  {
    id: 3,
    link: '/ls',
    tag: 'List'
  },
  {
    id: 4,
    link: '/test',
    tag: 'TEst'
  },
];

const Nav = () => {
  return (
    <>
      <div className='bg-gray-400 p-5 shadow-lg flex items-center justify-center gap-x-5'>
        {listRouter.map((item) => (
          <Link key={item.id} to={item.link}>
            {item.tag}
          </Link>
        ))}
      </div>
      <Outlet></Outlet>

    </>

  );
};

export default Nav;
