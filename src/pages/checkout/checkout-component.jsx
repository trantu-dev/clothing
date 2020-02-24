import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { selectTotalPrice } from '../../redux/cart/cart.selector';
import CheckoutItem from './../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
    ))}
    <div className="total">
      <span>TOTAL: ${cartTotal}</span>
    </div>
    <div className="text-warning">
      * Please use the following test creadit card for payments *<br></br>
      4242 4242 4242 4242 - Exp: 02-22 - CVV: 2222
    </div>
    <StripeCheckoutButton price={cartTotal}></StripeCheckoutButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
