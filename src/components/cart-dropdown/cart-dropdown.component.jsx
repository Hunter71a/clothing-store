import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  //alt way to navigate using useNavigate
  // Wrapping the button with link seemed easier without the need for helper functions
  /*   const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }; */

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to='/checkout'>
        <Button onClick={toggleIsCartOpen}>Checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
