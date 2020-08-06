import React, {useCallback, useEffect} from 'react';
import {Categories, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";

const categoryNames = [
    'Классические',
    'Любимые',
    'Преимум',
    'Легенды',
    'Красная цена'
]

const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'name'}
]

const Home = () => {

    const dispatch = useDispatch()

    const {pizzas, category, sortBy, isLoaded, cartItems} = useSelector(({pizzas, filters, cart}) => {
        return {
            pizzas: pizzas.items,
            category: filters.category,
            sortBy: filters.sortBy,
            isLoaded: pizzas.isLoaded,
            cartItems: cart.items
        }
    })

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [sortBy, category])

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [dispatch])

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [dispatch])

    const addPizza = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategoryIndex={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup activeSortBy={sortBy} items={sortItems} onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Пиццы</h2>
            {isLoaded && <p>Loading...</p>}
            <div className="content__items">
                {
                    pizzas && pizzas.map(obj => {
                        return (
                            <PizzaBlock
                                key={obj.id}
                                pizza={obj}
                                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                onClickAddPizza={addPizza}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Home;