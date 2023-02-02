const ModalSendMessage = ({ t, setShowModal }) => {
  const changeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="modal-send-message">
      <div className="modal-send-message__content">
        <div className="modal-send-message__content__header">
          <div className="modal-send-message__content__header__title">
            <p>{t("mainDescription.modal.title")}</p>
          </div>
          <div className="modal-send-message__content__header__close">
            <button className="" onClick={changeModal}>
              X
            </button>
          </div>
        </div>
        <div className="modal-send-message__content__body">
          <p className="modal-send-message__content__body__title">
            {t("mainDescription.modal.subtitle")}
          </p>
          <div className="modal-send-message__content__body--items">
            <div className="modal-send-message__content__body--item">
              <a
                href="https://www.linkedin.com/in/antonio-delage-cruzado/"
                target="_blank"
                rel="noreferrer"
              >
                {t("mainDescription.modal.linkedin")}
                <img
                  src="https://img.icons8.com/color/48/000000/linkedin.png"
                  alt="linkedin"
                ></img>
              </a>
            </div>
            <div className="modal-send-message__content__body--item">
              <a
                href="mailto:delincruzado20@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {t("mainDescription.modal.email")}
                <img
                  src="https://img.icons8.com/color/48/000000/gmail.png"
                  alt="gmail"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSendMessage;
