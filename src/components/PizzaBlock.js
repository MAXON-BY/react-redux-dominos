import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";

const PizzaBlock = ({pizza, onClickAddPizza, addedCount}) => {

    const {id, imageUrl, name, price, types, sizes, ingredients, weight} = pizza

    const availableTypes = ['тонкое', 'традиционное']
    const availableSizes = [22, 30, 36]

    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)

    const onSelectType = (index) => {
        setActiveType(index)
    }

    const onSelectSize = (index) => {
        setActiveSize(index)
    }

    const onAddPizza = ()=> {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            type: availableTypes[activeType],
            size: availableSizes[activeSize]
        }
        onClickAddPizza(obj)
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <p className="pizza-block__description">{ingredients}</p>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((type,index) => {
                        return (
                            <li
                                key={type}
                                onClick={() => onSelectType(index)}
                                className={activeType === index ? 'active' : ''}>
                                {availableTypes[type]}
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    {
                        sizes.map((size, index) => {
                            return(
                                <li
                                    key={size}
                                    onClick={() => onSelectSize(index)}
                                    className={activeSize === index ? 'active' : ''}>
                                    {size} см.
                                </li>
                            )
                        })
                    }
                </ul>
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
                    {addedCount &&<i>{addedCount}</i>}
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