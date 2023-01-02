import StateDemo from './components/StateDemo'
import ListDemo from './components/ListDemo';
import UserList from './components/UserList';
import HelloWorld from './components/HelloWorld';
import APICalls from './components/APICalls';

import './App.css';

function App() {
  return (
    <><HelloWorld />

      <div className='block'>
        <a href='/users'>Users</a>
      </div>
      <div className='block'>
        <a href='/posts'>Posts</a>
      </div>
      <div className='block'>
        <a href='/photos'>Photos</a>
      </div>
      <div className='block'>
        <a href='/state'>State Demo</a>
      </div>
      <div className='block'>
        <a href='/list'>List Demo</a>
      </div>

    </>
  )
}

export default App;
