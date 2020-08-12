import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";

const PizzaBlock = ({pizza, onClickAddPizza, addedCount, handleShowModalCart, getIdPizza}) => {

    const {id, imageUrl, name, price, types, sizes, ingredients, weight} = pizza

    const [activeType, setActiveType] = useState('')
    const [activeSize, setActiveSize] = useState('')

    const getIdPizzaFromPizzaBlock = () => {
        handleShowModalCart()
        getIdPizza(id)
    }

    const onSelectType = (event) => {
        setActiveType(event.currentTarget.value)
    }

    const onSelectSize = (event) => {
        setActiveSize(event.currentTarget.value)
    }

    const onAddPizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            weight,
            type: activeType,
            size: activeSize
        }
        onClickAddPizza(obj)
    }

    return (
        <div className="pizza-block">
            <div className="pizza-block__animation">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
                <div className="pizza-block__button-wrap">
                    <button
                        onClick={getIdPizzaFromPizzaBlock}
                        className="pizza-block__button-eye"
                        type="button"
                    >
                        !
                    </button>
                </div>
            </div>

            <h4 className="pizza-block__title">{name}</h4>
            <p className="pizza-block__description">{ingredients}</p>
            <div className="pizza-block__selector">
                <div className="pizza-block__modification">
                    <select onChange={onSelectSize}>
                        {sizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="pizza-block__modification">
                    <select onChange={onSelectType}>
                        {types.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>

                {/*<ul>*/}
                {/*    {types.map((type, index) => {*/}
                {/*        return (*/}
                {/*            <li*/}
                {/*                key={type}*/}
                {/*                onClick={() => onSelectType(index)}*/}
                {/*                className={activeType === index ? 'active' : ''}>*/}
                {/*                /!*{availableTypes[type]}*!/*/}
                {/*            </li>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</ul>*/}
                {/*<ul>*/}
                {/*    {*/}
                {/*        sizes.map((size, index) => {*/}
                {/*            return (*/}
                {/*                <li*/}
                {/*                    key={size}*/}
                {/*                    onClick={() => onSelectSize(index)}*/}
                {/*                    className={activeSize === index ? 'active' : ''}>*/}
                {/*                    {size} см.*/}
                {/*                </li>*/}
                {/*            )*/}
                {/*        })*/}
                {/*    }*/}
                {/*</ul>*/}
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__dop">
                    <div className="pizza-block__price">{price} <span>BYN</span></div>
                    <div className="pizza-block__weight">{weight[0]} гр.</div>
                </div>
                <Button
                    onClick={onAddPizza}
                    className="button--add"
                    outline
                >
                    <span>В корзину</span>
                    {addedCount && <i>{addedCount}</i>}
                </Button>
            </div>


        </div>
    );
};

PizzaBlock.propTypes = {
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.oneOf([22, 30, 36])),
    price: PropTypes.number,
    cartItems: PropTypes.object,
    onAdd: PropTypes.func,
    isLoading: PropTypes.bool,
};

PizzaBlock.defaultProps = {
    addedToCart: 0,
    price: 0,
    sizes: [],
    types: [],
    name: '',
    imageUrl: '',
    id: 0,
    cartItems: {},
};

export default PizzaBlock;