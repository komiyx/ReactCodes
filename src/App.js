import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Test from './Test';
import List from './List';
import {useRef} from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Error from './pages/Error';
import SingleContact from './pages/SingleContact';
import Login from './pages/Login';
import Dasboard from './pages/Dasboard';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {

  const [user, setUser] = useState(null);

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contact/:contactId' element={<SingleContact/>}/>
        <Route path='/login' element={<Login setUser = {setUser}/>}/>
        <Route path='/dasboard' element=
        {
          <ProtectedRoute user={user}>
            <Dasboard user = {user}/>
          </ProtectedRoute>
          
          }/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>


  );
}
export default App;
