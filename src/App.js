import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Header from './components/Header';
import Main from './components/Main';
import Contacts from './components/Contacts';
import Service from './components/Service';
import LoginPopup from './components/LoginPopup';
import { initialUsersData } from "./usersData";
import { initialServicesData } from './servicesData';

const App = () => {
  let [isLoginPopupOpen, setisLoginPopupOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    setUsers(initialUsersData);
  }, [initialUsersData])

  useEffect(() => {
    setServices(initialServicesData);
  }, [initialServicesData])

  const handleLoginClick = () => {
    setisLoginPopupOpen(true);
  };

  const closePopup = () => {
    setisLoginPopupOpen(false);
  };
  return (
      <div className="page">
      <Header onLogin={handleLoginClick}/>
      <Routes>
        <Route exact path="/profile" element={<Profile 
          currentUser={currentUser}
          setisLoggedIn={setisLoggedIn} />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/service/#" element={<Service/>} />
        <Route path="/" element={<Main 
          onLogin={handleLoginClick}
          services={services} />} />
      </Routes>
      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={closePopup}
        onLogin={handleLoginClick}
        users={users}
        setCurrentUser={setCurrentUser}
        setisLoggedIn={setisLoggedIn}
      />
    </div>
  );
}

export default App;
