import React from "react";

const Service = ({ service, onServiceClick }) => {

  const handleServiceClick = () => {
    onServiceClick(service);
  }
  

  return (
      <article onClick={handleServiceClick} className="element">
        <a><img
          src={service.img}
          className="element__image"
        /></a>
        <div className="element__info">
          <h2 className="element__title">{service.title}</h2>
          <div className="element__stripe"></div>
          <div className="element__text">{service.description}</div>
        </div>
        
      </article>
  );
}

export default Service;
