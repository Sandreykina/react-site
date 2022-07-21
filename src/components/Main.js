import React from "react";
import { useNavigate } from 'react-router-dom';
import Service from "./Service";

const Main = ({ onLogin, services }) => {
  const navigate = useNavigate();

  const handleContactsClick = () => {
    navigate("./contacts", { replace: true })
  };
  const handleServiceClick = () => {
    navigate("./service/#", { replace: true })
  };

  return (
    <div>
      <main className="content">
        <section className="main">
          <h1 className="main-title">Место для получения медицинской помощи</h1>
          <div className="main-btns">
            <button
              onClick={onLogin}
              type="button"
              className="main-login-btn"
            >Войти</button>

            <button
              onClick={handleContactsClick}
              type="button"
              className="main-contacts-btn"
            >Контакты</button>
          </div>

        </section>
        <section className="elements">
          {services.map((service, i) => {
            return (
              <Service service={service} key={i} onServiceClick={handleServiceClick} />)
          })}
        </section>
      </main>
    </div>
  );
}

export default Main;
