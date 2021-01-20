import React from 'react';
import { Link } from 'react-router-dom';


const OrderIsAccepted = () => {
    return (
        <div className="cart cart--empty">
            <h2>
                Ваш заказ принят <i>😁</i>
            </h2>
            <p>
                Ожидайте звонка курьера
      <br />
      Хорошего дня
    </p> 
            <Link to="/" className="button button--black">
                <span>Вернуться назад</span>
            </Link>
        </div>
    )
}
export default OrderIsAccepted
