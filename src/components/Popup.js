import React, { useEffect } from "react";

const Popup = ({
  name,
  children,
  isOpen,
  onClose,
  buttonText = "Войти",
  onSubmit,
}) => {
  const handleEscClose = (e) => {
    if (
      e.key === "Escape" ||
      e.target.classList.contains("popup_opened")
    ) {
      onClose(e);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscClose);
      document.addEventListener("mousedown", handleEscClose);
      return () => {
        document.removeEventListener("keydown", handleEscClose);
        document.removeEventListener("mousedown", handleEscClose);
      };
    }
  });

  const handleClickButton = () => {
    onSubmit();
    onClose();
  }

  return (
    <div>
      <div
        id={name}
        className={
          isOpen ? `popup popup_opened` : `popup`
        }
      >
        <div className="popup__container">
          <div className="popup__title">
            Вход
          </div>
          {children}
          <button className="popup__save-btn" onClick={handleClickButton}>
            {buttonText}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Popup;
