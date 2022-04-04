import { useContext, useEffect } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
  const { setIsCartOpen, cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const totalPurchase = cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );

  useEffect(() => {
    setIsCartOpen(false);
  }, []);

  return (
    <div className='checkout-container'>
      <h1>Checkout Page</h1>
      <div>
        {cartItems.map((item) => {
          const { name, id, quantity } = item;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemFromCart(item)}>decrement</span>
              <br />
              <span onClick={() => addItemToCart(item)}>increment</span>
            </div>
          );
        })}
      </div>
      <span></span>

      <div>
        <h2>Total Purchase: ${totalPurchase}</h2>
      </div>
    </div>
  );
};

export default Checkout;
