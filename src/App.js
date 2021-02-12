import './App.css';
import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <h2>Simple Authentication Button using React-Auth0</h2>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  );
}

export default App;
