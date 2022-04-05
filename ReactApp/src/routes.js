import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Register from './register';
// import Admin from './admin';
import Admin from './admin';
import User from './user';
import Addcar from './addcar';
import Userlist from './userlist';
import Carlist from './carlist';
import Bookinglist from './bookinglist';
import Edituser from './edituser';

const Router1 = () => {
  return (
    <Routes>
      <Route >
        <Route path="/" element={<App/>}/>
        <Route path="register" element={<Register/>} />
        <Route path="admin" element={<Admin/>}/>
        <Route path="user" element={<User/>}/>
        <Route path="addcar" element={<Addcar/>}/>
        <Route path="userlist" element={<Userlist/>}/>
        <Route path="carlist" element={<Carlist/>}/>
        <Route path="bookinglist" element={<Bookinglist/>}/>
        <Route path="edituser" element={<Edituser/>}/>







      </Route>
    </Routes>
  );
};
export default Router1