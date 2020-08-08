import React from 'react';
import classes from 'classnames'

const Modal = ({show, msg, onClickOk, onClickNo}) => {

    const classShow = classes("popup-msg-block", {"active" : show})

    return (
        <div className={classShow}>
            <div className="popup-msg">
                <p>{msg}</p>
            </div>
            <div className="popup-btn">
                <button className="button" onClick={onClickOk}>Да</button>
                <button className="button button--black" onClick={onClickNo}>Отмена</button>
            </div>
        </div>
    );
};

export default Modal;