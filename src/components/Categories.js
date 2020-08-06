import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({activeCategoryIndex, items, onClickCategory}) => {

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategoryIndex === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}
                >
                    Все
                </li>
                {items && items.map((item, index) => {
                    return (
                        <li
                            className={activeCategoryIndex === index ? 'active' : ''}
                            onClick={() => onClickCategory(index)}
                            key={item}
                        >
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

Categories.propTypes = {
    activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func
}

Categories.defaultProps = {activeCategory: null, item: []}

export default Categories;