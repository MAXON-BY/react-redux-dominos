import React from 'react';
import { Link } from 'react-router-dom';
import CartEmptyImg from '../assets/img/empty-cart.png';

const Empty = () => {
    return (
        <div className="cart cart--empty">
            <h2>Корзина пустая <span role="img" aria-label="smile">😕</span></h2>
            <p>Вероятней всего, вы не заказывали ещё пиццу.<br />
                Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <img src={CartEmptyImg} alt="Empty cart" />
            <Link to="/" class="button button--black">
                <span>Вернуться назад</span>
            </Link>
        </div>
    );
};

export default Empty;