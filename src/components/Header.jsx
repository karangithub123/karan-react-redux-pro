import React from 'react';

import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const Header = () => {


  const { cartItems} = useSelector(state => state.cart)
  return (
    <nav>
      <h2>Karan Shoppy...</h2>

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <ShoppingCartIcon className='icon' />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  )
}

export default Header