import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ currentUser, setisLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        setisLoggedIn(false);
        navigate("/");
    };
    const handleContactsClick = () => {
        navigate("/contacts");
    };

    return (
        <div className="profile">
            <h1 className="profile__title">Привет, {currentUser.nickname}</h1>
            <div className="profile-btns">
            <button
            onClick={handleLogoutClick}
            type="button"
            className="profile__exit-btn"
          >Выйти из аккаунта</button>

          <button
            onClick={handleContactsClick}
            type="button"
            className="profile__to-contacts-btn"
          >Перейти в контакты</button>
        </div>
            </div>
            
    )
}

export default Profile;
