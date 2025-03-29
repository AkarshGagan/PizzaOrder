import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuqantity, increaseItemQuqantity } from './cartsSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handeIncreaseItemQuantity() {
    dispatch(increaseItemQuqantity(pizzaId));
  }
  function handeDecreaseItemQuantity() {
    dispatch(decreaseItemQuqantity(pizzaId));
  }

  return (
    <div>
      <Button type="round" onClick={handeIncreaseItemQuantity}>
        +
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={handeDecreaseItemQuantity}>
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
