import React from 'react';
import classes from 'classnames'

const ModalCart = ({show, pizza, onClickClose}) => {

    const pizzaItem = pizza[0] || {}
    console.log('modal',pizzaItem)

    const classOverlay = classes("popup-overlay", {"active": show})
    const classShow = classes("popup-msg-block", "popup-item-desc", {"active": show})

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
                                <li>Жиры - 17,1</li>
                                <li>Белки - 17,1</li>
                                <li>Углеводы - 17,1</li>
                                <li>Энергетическая ценность - 259,4 ккал.</li>
                            </ul>
                        </div>
                        <div className="popup-modification__group">
                            <div className="popup-modification">
                                <select>
                                    <option selected value="22">22 см</option>
                                    <option value="30">30 см</option>
                                    <option value="36">36 см</option>
                                </select>
                            </div>

                            <div className="popup-modification">
                                <select>
                                    <option selected value="Хот-Дог борт">Хот-Дог борт</option>
                                    <option value="Классика">Классика</option>
                                    <option value="Ультратонкое">Ультратонкое</option>
                                    <option value="Сырный борт">Сырный борт</option>
                                    <option value="Тонкое">Тонкое</option>
                                </select>
                            </div>
                        </div>

                        <div className="popup-summary">
                            <div className="popup-summary__dop">
                                <div className="popup-summary__price">{pizzaItem.price} <span>BYN</span></div>
                                <div className="popup-summary__weight">370 гр.</div>
                            </div>
                            <button className="button button--add button--outline"><span>В корзину</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ModalCart;