import React from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Users from './Users';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
    <div>
      <ul className="class1">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/aboutus">ABOUTUS</Link></li>
        <li><Link to="/contactus">CONTACTUS</Link></li>
        <li><Link to="/users">USERS</Link></li>         
          <li><Link to="/users/1">User 1</Link></li>
          <li><Link to="/users/2">User 2</Link></li>
          <li><Link to="/users/3">User 3</Link></li>             
      </ul>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path="/users">
          <Route index element={<Users/>}/>
          <Route path=":id" element={<Users/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
   </BrowserRouter>

  );
}

export default App;
