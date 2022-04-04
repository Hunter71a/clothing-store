import { useContext, useEffect } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
  const { setIsCartOpen, cartItems, totalPurchase } = useContext(CartContext);

  /* const totalPurchase = cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );
 */
  useEffect(() => {
    setIsCartOpen(false);
  }, []);

  return (
    <div className='checkout-container'>
      <h1>Checkout</h1>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })}
      <h2>Total Purchase: ${totalPurchase}</h2>
    </div>
  );
};

export default Checkout;
