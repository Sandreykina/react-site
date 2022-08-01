import React from "react";
import { useParams, useNavigate } from 'react-router-dom';

const ServiceFull = () => {
  const {id} = useParams();
  let navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
      <div className="content">
        <h1>Полная информация об услуге {id}</h1>
        <button className="main-contacts-btn"
          onClick={goBack}>Назад</button>
      </div>
  );
}

export default ServiceFull;
