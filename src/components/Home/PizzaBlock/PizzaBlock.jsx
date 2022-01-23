import React, { useState } from 'react';
import Button from './../../Button/Button';
import classNames from 'classnames';
import PizzaBackground from './PizzaBackground';

const PizzaBlock = ({ id, name, imageUrl, price, types, sizes, isLoaded, onAddPizzaToCart, countAdded }) => {
  const type = ['thin', 'standard'];
  const size = [26, 30, 40];

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  if(!isLoaded) {
    return <PizzaBackground />
  }

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddPizza = () => {
   onAddPizzaToCart({id, name, imageUrl, price, type: type[activeType], size: size[activeSize]});
  }

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {type.map((el, i) => {
            return <li key={el} onClick={() => onSelectType(i)} className={classNames({
              active: activeType === i,
              disabled: !types.includes(i)
            })}>{el}</li>
          })}
        </ul>
        <ul>
          {size.map((el, i) => {
            return <li key={el} onClick={() => onSelectSize(i)} className={classNames({
              active: activeSize === i,
              disabled: !sizes.includes(el)
            })}>{el}cm.</li>
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from {price}&#36;</div>

        <Button onClick={onAddPizza} className={'button--add'} outline><svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            fill="white"
          />
        </svg>
          <span>Add</span>
          {countAdded && <i>{countAdded}</i>}
        </Button>

      </div>
    </div>
  )
}

export default PizzaBlock;