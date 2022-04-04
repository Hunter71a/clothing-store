import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = (props) => {
  const { cartItems, addItemToCart } = useContext(CartContext);
  const { quantity, price, name, imageUrl } = props.cartItem;

  return (
    <div>
      <div>
        <img src={imageUrl} alt={`${name}`} />
        <span>Number Purchased: {quantity}</span>
        <tab />
        <span> Price per item{price}</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
