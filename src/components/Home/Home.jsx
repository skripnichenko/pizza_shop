import React from 'react';
import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryActionCreator, sortByActionCreator } from './../../redux/sorter-reducer';
import { fetchPizzas } from './../../redux/pizzas-reducer';
import PizzaBackground from './PizzaBlock/PizzaBackground';
import { addPizzasToCartActionCreator } from '../../redux/cart-reducer';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [{ name: 'популярности', type: 'popular', order: 'desc' },
{ name: 'цене', type: 'price', order: 'desc' },
{ name: 'алфавиту', type: 'name', order: 'asc' }];

const Home = () => {
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const dispatch = useDispatch();
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ sorter }) => sorter);
  const cartItems = useSelector(({ cart }) => cart.items)

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((ind) => {
    dispatch(setCategoryActionCreator(ind))
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(sortByActionCreator(type))
  }, []);

  const addPizzas = (obj) => {
    dispatch(addPizzasToCartActionCreator(obj));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories categories={categories} activeCategory={category} setCategory={onSelectCategory} />
        <Sort onSelectSortType={onSelectSortType} activeSortType={sortBy.type} items={sortItems} />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {isLoaded ?
          pizzas.map((data) => {
            return <PizzaBlock onAddPizzaToCart={addPizzas} key={`${data.id}`} {...data} isLoaded={isLoaded} countAdded={cartItems[data.id] && cartItems[data.id].items.length} />
          }) : Array(12).fill(0).map((el, i) => <PizzaBackground key={i} />)
        }
      </div>
    </div>
  )
}

export default Home;