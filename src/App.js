import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GithubUserHandler from './component/Search';
import NavBarMenu from './component/Nav/Navbar';
import UserList from './component/UserList';

function App() {
  return (
 <React.Fragment>
   <NavBarMenu />
   <GithubUserHandler />
   {/* <UserList /> */}
 </React.Fragment>
  );
}

export default App;
