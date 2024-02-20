import React from 'react';
import './App.css';
import Blog from './Router/Blog';
import Nav from './Router/Nav';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Profile from './Router/Profile';
import Search from './Component/API/Search';
import Tooltip from './Component/Tooltip';
import Photo from './Photo';
import DropDown from './Component/Input/DropDown';
import HackerNew from './Component/getApiHacker/hackerNew';

function App() {
  return (
    // <BrowserRouter>
    //   <div>
    //     <Routes>
    //       <Route path='?' element={<Nav></Nav>}>
    //         <Route path="/" element={<div>Home</div>} />
    //         <Route path="/pr" element={<Blog />} />
    //         <Route path="/ls" element={<Profile />} />
    //       </Route>
    //         <Route path="*" element={<>"This is 404"</>} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <>
      <HackerNew></HackerNew>

    </>
  );
}

export default App;
