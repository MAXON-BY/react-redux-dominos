import React from 'react';
import classes from 'classnames'

const ModalCart = ({show, pizza, onClickClose}) => {

    const classOverlay = classes("popup-overlay", {"active": show})
    const classShow = classes("popup-msg-block", "popup-item-desc", {"active": show})

    const pizzaItem = pizza[0] || {}


    return (
        <>
        <div className={classOverlay} onClick={onClickClose}></div>
        <div className={classShow}>

            <div
                className="popup-close"
            >
                <button onClick={onClickClose}>X</button>
            </div>

            <div className="popup-content">
                <div className="popup-item">
                    <div className="popup-item__img">
                        <img src={pizzaItem.imageUrl}
                             alt={pizzaItem.name}/>
                    </div>

                    <div className="popup-text">
                        <h3 className="popup-text__title">{pizzaItem.name}</h3>
                        <p className="popup-text__description">{pizzaItem.ingredients}</p>
                        <div className="popup-text__nutritional">
                            <p>Пищевая ценность на 100г продукта:</p>
                            <ul>
                                {pizzaItem.nutritional && pizzaItem.nutritional.map(({title, count}) => {
                                    return (
                                        <li key={title}>{title} - {count}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ModalCart;