import React, {useCallback, useEffect} from 'react';
import {Categories, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import Slider from "react-slick";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";
import Spinner from "../components/Spinner";

const categoryNames = [
    'Классические',
    'Любимые',
    'Преимум',
    'Легенды',
    'Красная цена'
]

const sliderImages = [
    {
        name: 'Img #1',
        img: 'https://images.dominos.by/media/dominos/sliders/ru/big/2020/06/05/%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_%D0%9F%D0%9B_1320%D1%85400.png'
    },
    {
        name: 'Img #2',
        img: 'https://images.dominos.by/media/dominos/sliders/ru/big/2020/06/03/%D1%81%D0%BB%D0%B9%D0%B4%D0%B5%D1%80_Vita_%D1%87%D0%B0%D0%B9_1320%D1%85400.png'
    },
    {
        name: 'Img #3',
        img: 'https://images.dominos.by/media/dominos/sliders/ru/big/2020/06/05/%D0%A1%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_%D0%B1%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82_13-03-min.png'
    },
    {
        name: 'Img #4',
        img: 'https://images.dominos.by/media/dominos/sliders/ru/big/2020/05/22/%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B5_%D0%9A%D1%83%D0%BD%D1%86_2%D0%90_1320%D1%85400_.png'
    },
    {
        name: 'Img #5',
        img: 'https://images.dominos.by/media/dominos/sliders/ru/big/2020/07/01/%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_%D0%90%D0%B7%D0%B8%D1%8F_%D0%9C%D0%B8%D0%BD%D1%81%D0%BA_1320%D1%85400-min.png'
    },
    {
        name: 'Img #6',
        img: 'https://images.dominos.by/media/dominos/sliders/ru/big/2019/02/01/%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_%D0%A1%D0%91_%D0%9C%D0%B8%D0%BD%D1%81%D0%BA_%D1%80%D0%B5%D0%B3%D0%B8%D0%BE%D0%BD%D1%8B_%D1%81_01.02.19.png'
    },
    {
        name: 'Img #7',
        img: 'https://images.dominos.by/media/dominos/sliders/ru/big/2019/08/21/%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_HOT_DOG_%D0%B1%D0%BE%D1%80%D1%82_1320%D1%85400_%D1%80%D1%83%D1%81.png'
    },
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

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="slider-wrap">
                <Slider {...settings}>
                    {sliderImages.map(({name, img}) => (
                        <div key={name}>
                            <img src={img} alt={name}/>
                        </div>
                    ))}
                </Slider>
            </div>
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
                <div className="content__items">
                    {isLoaded
                        ? <Spinner loading={isLoaded}/>
                        : pizzas && pizzas.map(obj => {
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
        </>
    );
};

export default Home;