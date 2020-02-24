import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from './../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from './../../assets/11.2 shopping-bag.svg.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
