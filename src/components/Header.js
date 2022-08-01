import React from "react";
import headerLogo from "../images/logo.svg";
import { useNavigate } from 'react-router-dom';
import LoginPopup from "./LoginPopup";

const Header = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleContactsClick = () => {
    navigate("./contacts")
  };
  const handleLogoClick = () => {
    navigate("/")
  };

  return (
    <div>
      <header className="header">
        <img onClick={handleLogoClick} src={headerLogo} alt="Логотип" className="header__logo" />
        <div className="header-btns">
          <button
            onClick={handleContactsClick}
            type="button"
            className="header-contacts-btn"
          >Контакты</button>

          <button
            onClick={onLogin}
            type="button"
            className="header-login-btn"
          >Войти</button>
        </div>

        <LoginPopup />
      </header>
    </div>
  );
}

export default Header;
