import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import App from './App';
import UserList from "./components/UserList"
import ListDemo from "./components/ListDemo"
import StateDemo from "./components/StateDemo"
import APICalls from "./components/APICalls"
import User from "./components/User"
import PostList from "./components/PostList"
import Post from "./components/Post"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/users' element={<UserList />} />
        <Route path='/users/:userId' element={<User />} />
        <Route path='/posts' element={<PostList/>} />
        <Route path='/posts/:postId' element={<Post/>} />
        <Route path='/photos' element={<APICalls/>} />
        <Route path='/state' element={<StateDemo/>} />
        <Route path='/list' element={<ListDemo/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
