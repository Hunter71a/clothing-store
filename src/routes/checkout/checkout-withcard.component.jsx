import { useContext, useEffect } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
  const { setIsCartOpen, cartItems, addItemToCart } = useContext(CartContext);

  //close shopping cart to unclutter view
  useEffect(() => {
    setIsCartOpen(false);
  }, []);

  const totalPurchase = cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );

  return (
    <div className='checkout-container'>
      <h1>Checkout Page</h1>
      <div>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
      </div>
      <span></span>

      <div>
        <h2>Total Purchase: ${totalPurchase}</h2>
      </div>
    </div>
  );
};

export default Checkout;
