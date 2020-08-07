import React from 'react';

const PopupWindow = ({msg,onClickOk, onClickNo}) => {
    return (
        <div className="popup-msg-block">
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

export default PopupWindow;