import React, { useState } from "react";
import Popup from "./Popup";
import { useNavigate } from 'react-router-dom';
import { STORAGE_TOKEN } from './../constants';
//todo: сделать jwt-токен и закодировать имя, id
const LoginPopup = ({ isOpen, onClose, users, setCurrentUser, setisLoggedIn }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    const user = users.filter((u) => u.login === login && u.password === password)
    if(user[0]) {
      setCurrentUser(user[0]);
      setisLoggedIn(true);
      window.localStorage.setItem(STORAGE_TOKEN, '1234')
      navigate("./profile");
    }
    else {
      alert("нет такого пользователя");
    }
  }

  return (
    <Popup
      name="login"
      children={
        <div>
          <input
            required
            placeholder="login"
            name="login"
            id="login"
            value={login}
            onChange={handleLoginChange}
            type="text"
            className="popup__input"
            minLength="2"
            maxLength="30"
          />
          <input
            required
            placeholder="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            type="text"
            className="popup__input"
            minLength="8"
            maxLength="30"
          />
        </div>
      }
      title="Вход"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default LoginPopup;
